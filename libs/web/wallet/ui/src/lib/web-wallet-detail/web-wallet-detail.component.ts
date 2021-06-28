import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Transaction, Wallet } from '@kin-nxpm-stack/shared/util/sdk'
import { SendKinInput } from '@kin-nxpm-stack/web/wallet/data-access'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'

@Component({
  selector: 'web-wallet-detail',
  template: `
    <ng-container *ngIf="wallet">
      <div class="flex flex-col space-y-3">
        <div class="flex space-x-2">
          <ui-button label="Refresh" (handler)="refresh.emit(wallet)"></ui-button>
          <ui-button
            *ngIf="wallet.network.toLowerCase().includes('test')"
            label="Airdrop"
            (handler)="airdrop.emit(wallet)"
          ></ui-button>
        </div>
        <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
          <div class="flex justify-between items-center">
            <a [routerLink]="wallet.id">
              <code>{{ wallet.publicKey }}</code>
            </a>
            <div class="flex space-x-2">
              <ui-icon icon="eye"></ui-icon>
              <code>{{ wallet.network }}</code>
            </div>
          </div>
        </div>
        <ng-container *ngIf="!accounts?.length">
          <ui-button label="Create Account" (handler)="create.emit(wallet)"></ui-button>
        </ng-container>
        <ng-container *ngIf="accounts?.length">
          <h3 class="text-lg leading-6 font-medium text-gray-400">Accounts</h3>
          <web-wallet-account-list [accounts]="accounts"></web-wallet-account-list>
          <h3 class="text-lg leading-6 font-medium text-gray-400">Send KIN</h3>
          <web-wallet-form-send
            (send)="send.emit($event)"
            [wallet]="wallet"
            [accounts]="accounts"
          ></web-wallet-form-send>
          <h3 class="text-lg leading-6 font-medium text-gray-400">Transactions</h3>
          <web-transaction-list [transactions]="transactions"></web-transaction-list>
        </ng-container>
      </div>
    </ng-container>
  `,
})
export class WebWalletDetailComponent {
  @Input() accounts: KinAccountBalance[]
  @Input() transactions: Transaction[]
  @Input() wallet: Wallet
  @Output() airdrop = new EventEmitter<Wallet>()
  @Output() create = new EventEmitter<Wallet>()
  @Output() refresh = new EventEmitter<Wallet>()
  @Output() send = new EventEmitter<SendKinInput>()
}
