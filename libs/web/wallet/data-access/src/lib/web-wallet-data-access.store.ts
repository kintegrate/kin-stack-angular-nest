import { Injectable } from '@angular/core'
import { Network, UserCreateWalletInput, Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { environment } from '@kin-nxpm-stack/web/core/feature'
import { KinClient, KinProd, KinTest } from '@kin-sdk/client'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { defer } from 'rxjs'
import { mergeMap, switchMap, tap } from 'rxjs/operators'
import * as SecureLS from 'secure-ls'

export interface SendKinInput {
  wallet: Wallet
  balance: KinAccountBalance
  destination: string
  amount: string
}

interface WebWalletDataAccessState {
  error?: any
  loading?: boolean
  keys: Map<string, string>
  wallets?: Wallet[]
}

@Injectable({ providedIn: 'root' })
export class WebWalletDataAccessStore extends ComponentStore<WebWalletDataAccessState> {
  readonly ls = new SecureLS({ encodingType: 'aes' })
  readonly networks = {
    [Network.KinMainnet]: new KinClient(KinProd, { appIndex: environment.kinAppIndex }),
    [Network.KinTestnet]: new KinClient(KinTest, { appIndex: environment.kinAppIndex }),
  }

  constructor(private readonly data: WebCoreDataAccessService) {
    super({
      keys: new Map<string, string>(),
    })
    this.loadApiWalletsEffect()
  }

  readonly error$ = this.select((s) => s.error)
  readonly keys$ = this.select((s) => s.keys)
  readonly loading$ = this.select((s) => s.loading)
  readonly wallets$ = this.select((s) => s.wallets)
  readonly vm$ = this.select(this.error$, this.loading$, this.wallets$, (error, loading, wallets) => ({
    error,
    loading,
    wallets,
  }))

  readonly loadApiWalletsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.data.userWallets().pipe(
          tapResponse(
            (res) => {
              const wallets = res.data.items.filter((item) => this.ls.getAllKeys().includes(item.publicKey))
              this.patchState({ wallets, loading: false })
            },
            (error) => this.patchState({ error, loading: false }),
          ),
        ),
      ),
    ),
  )

  readonly createApiWalletEffect = this.effect<UserCreateWalletInput>((input$) =>
    input$.pipe(
      switchMap((input) =>
        this.data.userCreateWallet({ input }).pipe(
          tapResponse(
            () => this.loadApiWalletsEffect(),
            (error) => this.patchState({ error }),
          ),
        ),
      ),
    ),
  )

  readonly storeWalletKeysEffect = this.effect<[Network, string, string]>((keys$) =>
    keys$.pipe(
      tap(([, publicKey, secret]) => this.ls.set(publicKey, secret)),
      mergeMap(([network, , secret]) =>
        defer(() => this.kin(network).createAccount(secret)).pipe(
          tapResponse(
            (res) => {
              console.log('res', res)
            },
            (error) => {
              console.log('err', error)
            },
          ),
        ),
      ),
    ),
  )

  readonly sendKinEffect = this.effect<SendKinInput>((input$) =>
    input$.pipe(
      tap((input) => {
        console.log('input', input)
      }),
      switchMap(({ wallet, balance, amount, destination }) =>
        defer(() => {
          const secret = this.ls.get(wallet.publicKey)
          return this.kin(wallet.network).submitPayment({
            secret,
            tokenAccount: balance.account,
            amount,
            destination,
          })
        }).pipe(
          tapResponse(
            ([tx, err]) => {
              console.log('err', err)
              console.log('tx', tx)
            },
            (err) => {
              console.log(err)
            },
          ),
        ),
      ),
    ),
  )

  kin(network: Network): KinClient {
    return this.networks[network]
  }
}
