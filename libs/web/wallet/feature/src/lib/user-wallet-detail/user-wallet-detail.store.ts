import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Wallet } from '@kin-nxpm-stack/web/core/data-access'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { defer } from 'rxjs'
import { filter, pluck, switchMap, tap } from 'rxjs/operators'

interface UserWalletDetailState {
  error?: string
  loading?: boolean
  balances?: KinAccountBalance[]
  wallet?: Wallet
}

@Injectable()
export class UserWalletDetailStore extends ComponentStore<UserWalletDetailState> {
  constructor(private readonly walletStore: WebWalletDataAccessStore, route: ActivatedRoute) {
    super({})
    this.loadItemEffect(route.params.pipe(pluck('walletId')))
    this.loadBalancesEffect(this.wallet$)
  }

  readonly wallets$ = this.select(this.walletStore.vm$, (s) => s.wallets)
  readonly error$ = this.select((s) => s.error)
  readonly balances$ = this.select((s) => s.balances)
  readonly wallet$ = this.select((s) => s.wallet)
  readonly loading$ = this.select((s) => s.loading)
  readonly vm$ = this.select(
    this.error$,
    this.loading$,
    this.balances$,
    this.wallet$,
    (error, loading, balances, wallet) => ({
      empty: !loading && !wallet,
      error,
      loading,
      balances,
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

  readonly airdropEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      switchMap((wallet: Wallet) => {
        console.log('airdropEffect', wallet)
        return defer(() => this.walletStore.kin(wallet.network).requestAirdrop(wallet.publicKey, '10000')).pipe(
          tapResponse(
            ([balances, err]) => {
              this.loadBalancesEffect(wallet)
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

  readonly refreshEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      tap((wallet: Wallet) => {
        this.loadItemEffect(wallet.id)
        this.loadBalancesEffect(wallet)
      }),
    ),
  )

  readonly sendKinEffect = this.walletStore.sendKinEffect
}
