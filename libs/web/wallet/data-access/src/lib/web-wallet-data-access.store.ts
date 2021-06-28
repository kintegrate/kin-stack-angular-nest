import { Injectable } from '@angular/core'
import { Network, UserCreateWalletInput, Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { environment } from '@kin-nxpm-stack/web/core/feature'
import { WebLayoutStore } from '@kin-nxpm-stack/web/layout'
import { KinClient, KinProd, KinTest } from '@kin-sdk/client'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { defer } from 'rxjs'
import { mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import * as SecureLS from 'secure-ls'

export interface SendKinInput {
  wallet: Wallet
  account: string
  destination: string
  amount: string
}

interface WebWalletDataAccessState {
  error?: any
  loading?: boolean
  total: number
  keys: Map<string, string>
  accounts: { [key: string]: KinAccountBalance[] }
  wallets?: Wallet[]
}

@Injectable({ providedIn: 'root' })
export class WebWalletDataAccessStore extends ComponentStore<WebWalletDataAccessState> {
  readonly ls = new SecureLS({ encodingType: 'aes' })
  readonly networks = {
    [Network.KinMainnet]: new KinClient(KinProd, { appIndex: environment.kinAppIndex }),
    [Network.KinTestnet]: new KinClient(KinTest, { appIndex: environment.kinAppIndex }),
  }

  constructor(private readonly data: WebCoreDataAccessService, private readonly layout: WebLayoutStore) {
    super({
      accounts: {},
      total: 0,
      keys: new Map<string, string>(),
    })
    console.log('BLA')
    this.loadApiWalletsEffect()
  }

  readonly error$ = this.select((s) => s.error)
  readonly keys$ = this.select((s) => s.keys)
  readonly loading$ = this.select((s) => s.loading)
  readonly total$ = this.select((s) => s.total)
  readonly accounts$ = this.select((s) => s.accounts)
  readonly wallets$ = this.select((s) => s.wallets)
  readonly vm$ = this.select(
    this.error$,
    this.loading$,
    this.total$,
    this.accounts$,
    this.wallets$,
    (error, loading, total, accounts, wallets) => ({
      error,
      loading,
      total,
      accounts,
      wallets,
    }),
  )

  readonly loadApiWalletsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.data.userWallets().pipe(
          tapResponse(
            (res) => {
              const wallets = res.data.items.filter((item) => this.ls.getAllKeys().includes(item.publicKey))
              wallets.forEach((wallet) => this.updateWalletBalance(wallet))
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

  readonly createAccountEffect = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      mergeMap((wallet: Wallet) => {
        const secret = this.ls.get(wallet.publicKey)
        return defer(() => this.kin(wallet.network).createAccount(secret)).pipe(
          tapResponse(
            (res) => {
              console.log('res', res)
            },
            (error) => {
              console.log('err', error)
            },
          ),
        )
      }),
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

  readonly updateWalletBalances = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ total: 0 })),
      withLatestFrom(this.wallets$),
      tap(([, wallets]) => wallets.map((wallet) => this.updateWalletBalance(wallet))),
    ),
  )

  readonly updateWalletBalance = this.effect<Wallet>((wallet$) =>
    wallet$.pipe(
      mergeMap((wallet: Wallet) =>
        defer(() => this.kin(wallet.network).getBalances(wallet.publicKey)).pipe(
          tapResponse(
            ([accounts]) => {
              this.setState((s) => {
                const sum = accounts.reduce((acc, curr) => acc + Number(curr.balance), 0)
                const total = s.total + sum
                this.layout.updateTotal(total)
                return {
                  ...s,
                  accounts: { ...s.accounts, [wallet.publicKey]: accounts },
                  total,
                }
              })
            },
            (error) => {
              console.log('err', error)
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
