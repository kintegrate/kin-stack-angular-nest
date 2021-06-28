import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiLoaderModule } from '@kin-nxpm-stack/web/ui/loader'
import { WebWalletListModule } from '@kin-nxpm-stack/web/wallet/ui'
import { UserWalletListStore } from './user-wallet-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-loader [loading]="vm.loading"></ui-loader>
      <div class="text-right p-4 text-2xl">
        <code>Total: {{ vm.total | currency: '':'':'1.0-0' }} KIN</code>
      </div>
      <web-wallet-list [accounts]="vm.accounts" [wallets]="vm.wallets"></web-wallet-list>
    </ng-container>
  `,
  providers: [UserWalletListStore],
})
export class UserWalletListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserWalletListStore) {}
}

@NgModule({
  declarations: [UserWalletListComponent],
  imports: [
    CommonModule,
    WebUiLoaderModule,
    WebWalletListModule,
    RouterModule.forChild([{ path: '', component: UserWalletListComponent }]),
  ],
})
export class UserWalletListModule {}
