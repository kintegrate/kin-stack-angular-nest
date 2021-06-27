import { Injectable } from '@angular/core'
import { Network, UserCreateWalletInput, Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { KinClient, KinProd, KinTest } from '@kin-sdk/client'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { defer } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import * as SecureLS from 'secure-ls'

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
    [Network.KinMainnet]: new KinClient(KinProd, { appIndex: 226 }),
    [Network.KinTestnet]: new KinClient(KinTest, { appIndex: 226 }),
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
              wallets.forEach((wallet) => this.loadBalancesEffect(wallet))
              this.patchState({ wallets, loading: true })
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
      switchMap(([network, , secret]) =>
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

  readonly loadBalancesEffect = this.effect<Wallet>(($) =>
    $.pipe(
      switchMap((wallet) =>
        defer(() => this.kin(wallet.network).getBalances(wallet.publicKey)).pipe(
          tapResponse(
            (res) => {
              console.log('res', wallet.publicKey, res)
            },
            (error) => {
              console.error('error', wallet.publicKey, error)
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
