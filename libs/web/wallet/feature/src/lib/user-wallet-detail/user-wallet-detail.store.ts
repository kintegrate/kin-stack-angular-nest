import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Transaction, TransactionType, Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { SendKinInput, WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { defer } from 'rxjs'
import { filter, pluck, switchMap, tap } from 'rxjs/operators'

interface UserWalletDetailState {
  error?: string
  loading?: boolean
  balances?: KinAccountBalance[]
  transactions?: Transaction[]
  wallet?: Wallet
}

@Injectable()
export class UserWalletDetailStore extends ComponentStore<UserWalletDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly walletStore: WebWalletDataAccessStore,
    route: ActivatedRoute,
  ) {
    super({})
    this.loadItemEffect(route.params.pipe(pluck('walletId')))
    this.loadBalancesEffect(this.wallet$)
    this.loadTransactionsEffect(this.wallet$)
  }

  readonly wallets$ = this.select(this.walletStore.vm$, (s) => s.wallets)
  readonly error$ = this.select((s) => s.error)
  readonly balances$ = this.select((s) => s.balances)
  readonly transactions$ = this.select((s) => s.transactions)
  readonly wallet$ = this.select((s) => s.wallet)
  readonly loading$ = this.select((s) => s.loading)
  readonly vm$ = this.select(
    this.error$,
    this.loading$,
    this.balances$,
    this.transactions$,
    this.wallet$,
    (error, loading, balances, transactions, wallet) => ({
      empty: !loading && !wallet,
      error,
      loading,
      balances,
      transactions,
      wallet,
    }),
  )

  readonly loadItemEffect = this.effect<string>((walletId$) =>
    walletId$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((walletId) =>
        this.wallets$.pipe(
          filter((wallets) => !!wallets?.length),
          tap((wallets) => {
            const wallet = wallets?.find((wallet) => wallet.id === walletId)
            this.patchState({
              loading: false,
              error: wallet ? null : `Wallet ${walletId} not found`,
              wallet,
            })
          }),
        ),
      ),
    ),
  )

  readonly loadTransactionsEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      filter((wallet) => !!wallet),
      tap(() => console.log('Loading Balance')),
      switchMap((wallet) =>
        this.data.userWalletTransactions({ walletId: wallet.id }).pipe(
          tapResponse(
            (res) => {
              const transactions = res.data.transactions.map((transaction) => {
                return {
                  ...transaction,
                  type: transaction.sender === wallet.publicKey ? TransactionType.Outgoing : TransactionType.Incoming,
                }
              })
              this.patchState({ transactions })
            },
            (error) => console.error(error),
          ),
        ),
      ),
    ),
  )
  readonly loadBalancesEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      filter((wallet) => !!wallet),
      tap(() => console.log('Loading Balance')),
      switchMap((wallet: Wallet) => {
        return defer(() => this.walletStore.kin(wallet.network).getBalances(wallet.publicKey)).pipe(
          tapResponse(
            ([balances, err]) => {
              this.patchState({ balances })
              console.log('balances', balances)
              console.log('err', err)
            },
            (error) => {
              console.log(error)
            },
          ),
        )
      }),
    ),
  )

  readonly airdropEffect = this.effect<[Wallet, string]>((wallet$) =>
    wallet$.pipe(
      switchMap(([wallet, amount]: [Wallet, string]) => {
        return defer(() => this.walletStore.kin(wallet.network).requestAirdrop(wallet.publicKey, amount)).pipe(
          tapResponse(
            ([balances, err]) => {
              this.loadBalancesEffect(wallet)
              this.walletStore.updateWalletBalances()
              console.log('balances', balances)
              console.log('err', err)
            },
            (error) => {
              console.log(error)
            },
          ),
        )
      }),
    ),
  )

  readonly createEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      tap((wallet) => {
        this.walletStore.createAccountEffect(wallet)
      }),
    ),
  )

  readonly refreshEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      tap((wallet: Wallet) => {
        this.loadItemEffect(wallet.id)
        this.loadBalancesEffect(wallet)
        this.loadTransactionsEffect(wallet)
      }),
    ),
  )

  readonly sendKinEffect = this.effect<SendKinInput>((input$) =>
    input$.pipe(
      switchMap(({ wallet, account, amount, destination }) =>
        defer(() => {
          const secret = this.walletStore?.ls.get(wallet.publicKey)
          return this.walletStore?.kin(wallet.network).submitPayment({
            secret,
            tokenAccount: account,
            amount,
            destination,
          })
        }).pipe(
          tapResponse(
            ([tx, err]) => {
              console.log('err', err)
              console.log('tx', tx)
              this.refreshEffect(wallet)
            },
            (err) => {
              console.log(err)
            },
          ),
        ),
      ),
    ),
  )
}
