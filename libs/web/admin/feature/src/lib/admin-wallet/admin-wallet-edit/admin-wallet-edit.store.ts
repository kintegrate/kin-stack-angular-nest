import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdminUpdateWalletInput, WebCoreDataAccessService, Wallet } from '@kin-nxpm-stack/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface WalletEditState {
  errors?: any
  loading?: boolean
  item?: Wallet
}

@Injectable()
export class AdminWalletEditStore extends ComponentStore<WalletEditState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
    super({ loading: false })
    this.loadWalletEffect(route.params.pipe(pluck('walletId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadWalletEffect = this.effect<string>((walletId$) =>
    walletId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((walletId) =>
        this.data.adminWallet({ walletId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )

  readonly updateWalletEffect = this.effect<AdminUpdateWalletInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateWallet({ input, walletId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
            },
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
