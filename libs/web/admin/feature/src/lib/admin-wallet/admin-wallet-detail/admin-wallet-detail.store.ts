import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Wallet } from '@kin-nxpm-stack/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface WalletDetailState {
  errors?: any
  loading?: boolean
  item?: Wallet
}

@Injectable()
export class AdminWalletDetailStore extends ComponentStore<WalletDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, route: ActivatedRoute) {
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

  readonly deleteWalletEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      switchMap((wallet) =>
        this.data.adminDeleteWallet({ walletId: wallet.id }).pipe(
          tapResponse(
            (res) => this.router.navigate(['/admin/wallets']),
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
