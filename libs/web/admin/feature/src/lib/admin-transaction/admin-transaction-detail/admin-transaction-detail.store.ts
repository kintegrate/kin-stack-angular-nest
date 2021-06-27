import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Transaction, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface TransactionDetailState {
  errors?: any
  loading?: boolean
  item?: Transaction
}

@Injectable()
export class AdminTransactionDetailStore extends ComponentStore<TransactionDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, route: ActivatedRoute) {
    super({ loading: false })
    this.loadTransactionEffect(route.params.pipe(pluck('transactionId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadTransactionEffect = this.effect<string>((transactionId$) =>
    transactionId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((transactionId) =>
        this.data.adminTransaction({ transactionId }).pipe(
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
}
