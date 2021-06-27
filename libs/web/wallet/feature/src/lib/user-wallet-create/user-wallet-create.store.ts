import { Injectable } from '@angular/core'
import { Network, UserCreateWalletInput, Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { environment } from '@kin-nxpm-stack/web/core/feature'
import { WebUiFormField } from '@kin-nxpm-stack/web/ui/form'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { createWallet, Wallet as KinWallet } from '@kin-sdk/client'
import { ComponentStore } from '@ngrx/component-store'
import { tap, withLatestFrom } from 'rxjs/operators'

interface UserWalletCreateState {
  input?: UserCreateWalletInput
  wallet?: Wallet
  loading?: boolean
}

const defaultInput: UserCreateWalletInput = {
  name: navigator.userAgent + ` - ${navigator.vendor}`,
  network: environment.defaultNetwork,
  publicKey: '',
}

@Injectable()
export class UserWalletCreateStore extends ComponentStore<UserWalletCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly walletStore: WebWalletDataAccessStore) {
    super({ input: defaultInput })
    this.newWalletEffect()
    console.log(navigator)
    console.log(navigator.platform)
    console.log(navigator.vendor)
    // navigator
    // console.log(os)
    // console.log(browser)
  }

  readonly fields = [
    WebUiFormField.input('name', { label: 'Name', required: true }),
    WebUiFormField.input('publicKey', { label: 'Public Key', required: true }),
    WebUiFormField.radio('network', {
      label: 'Network',
      required: true,
      options: Object.values(Network).map((value) => ({ value, label: value })),
    }),
  ]

  readonly keys$ = this.select(this.walletStore.keys$, (s) => s)
  readonly input$ = this.select(this.state$, (s) => s.input)
  readonly wallet$ = this.select(this.state$, (s) => s.wallet)
  readonly vm$ = this.select(this.input$, this.wallet$, this.keys$, (input, wallet, keys) => ({
    input,
    wallet,
    keys,
    fields: this.fields,
  }))

  readonly newWalletEffect = this.effect(($) =>
    $.pipe(
      tap(() => {
        const wallet = createWallet('create')
        this.setState((s) => ({
          ...s,
          input: { ...s.input, publicKey: wallet.publicKey },
          wallet,
        }))
      }),
    ),
  )

  readonly createWalletEffect = this.effect<UserCreateWalletInput>(($) =>
    $.pipe(
      withLatestFrom(this.wallet$),
      tap(([input, wallet]: [UserCreateWalletInput, KinWallet]) => {
        this.walletStore.storeWalletKeysEffect([input.network, wallet.publicKey, wallet.secret])
        this.walletStore.createApiWalletEffect(input)
      }),
    ),
  )
}
