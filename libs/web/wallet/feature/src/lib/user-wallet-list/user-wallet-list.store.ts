import { Injectable } from '@angular/core'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { ComponentStore } from '@ngrx/component-store'

interface UserWalletListState {
  loading?: boolean
}

@Injectable()
export class UserWalletListStore extends ComponentStore<UserWalletListState> {
  constructor(private readonly walletStore: WebWalletDataAccessStore) {
    super({})
  }

  readonly loading$ = this.select(this.walletStore.vm$, (s) => s.loading)
  readonly wallets$ = this.select(this.walletStore.vm$, (s) => s.wallets)
  readonly vm$ = this.select(this.loading$, this.wallets$, (loading, wallets) => ({
    loading,
    wallets,
  }))
}
