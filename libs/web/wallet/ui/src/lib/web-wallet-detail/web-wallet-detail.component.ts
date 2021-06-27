import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'
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
          <div class="flex justify-between items-center p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
            <a [routerLink]="wallet.id">
              <code>{{ wallet.publicKey }}</code>
            </a>
            <code>{{ wallet.network }}</code>
          </div>
        </div>
        <div class="flex flex-col space-y-3">
          <ng-container *ngFor="let balance of balances">
            <web-wallet-form-send
              (send)="send.emit($event)"
              [balance]="balance"
              [wallet]="wallet"
            ></web-wallet-form-send>
          </ng-container>
        </div>
      </div>
    </ng-container>
  `,
})
export class WebWalletDetailComponent {
  @Input() balances: KinAccountBalance[]
  @Input() wallet: Wallet
  @Output() airdrop = new EventEmitter<Wallet>()
  @Output() refresh = new EventEmitter<Wallet>()
  @Output() send = new EventEmitter<SendKinInput>()
}
