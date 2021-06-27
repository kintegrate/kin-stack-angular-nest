import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'
import { WebUiLoaderModule } from '@kin-nxpm-stack/web/ui/loader'
import { SendKinInput } from '@kin-nxpm-stack/web/wallet/data-access'
import { WebWalletDetailModule } from '@kin-nxpm-stack/web/wallet/ui'
import { UserWalletDetailStore } from './user-wallet-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-loader [loading]="vm.loading"></ui-loader>
      <ng-container *ngIf="vm.error">
        <div class="px-4 py-2 border border-red-700 text-red-700 bg-red-200 rounded">
          {{ vm?.error }}
        </div>
      </ng-container>
      <ng-container *ngIf="!vm.empty">
        <web-wallet-detail
          (airdrop)="airdrop($event)"
          (refresh)="refresh($event)"
          (send)="send($event)"
          [wallet]="vm.wallet"
          [balances]="vm.balances"
          [transactions]="vm.transactions"
        ></web-wallet-detail>
      </ng-container>
    </ng-container>
  `,
  providers: [UserWalletDetailStore],
})
export class UserWalletDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserWalletDetailStore) {}

  airdrop(wallet: Wallet) {
    this.store.airdropEffect(wallet)
  }

  refresh(wallet: Wallet) {
    this.store.refreshEffect(wallet)
  }

  send(input: SendKinInput) {
    this.store.sendKinEffect(input)
  }
}

@NgModule({
  declarations: [UserWalletDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserWalletDetailComponent,
      },
    ]),
    WebUiLoaderModule,
    WebWalletDetailModule,
  ],
})
export class UserWalletDetailModule {}
