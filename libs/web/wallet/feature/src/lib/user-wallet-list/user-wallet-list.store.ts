import { Injectable } from '@angular/core'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Wallet, WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

interface UserWalletListState {
  wallets?: Wallet[]
  loading?: boolean
}

@Injectable()
export class UserWalletListStore extends ComponentStore<UserWalletListState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly walletStore: WebWalletDataAccessStore) {
    super({})
    this.loadItemsEffect()
  }

  readonly wallets$ = this.select(this.walletStore.vm$, (s) => s.wallets)
  readonly vm$ = this.select(this.wallets$, (wallets) => ({ wallets }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ wallets: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
