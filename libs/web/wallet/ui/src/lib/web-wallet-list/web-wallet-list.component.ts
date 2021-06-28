import { Component, Input } from '@angular/core'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'

@Component({
  selector: 'web-wallet-list',
  template: `
    <div class="flex flex-col space-y-3">
      <ng-container *ngFor="let wallet of wallets">
        <div class="">
          <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
            <div class="flex justify-between items-center ">
              <a [routerLink]="wallet.id">
                <code>{{ wallet.publicKey }}</code>
              </a>
              <code class="text-sm text-gray-500">{{ wallet.network }}</code>
            </div>
            <ng-container *ngIf="accounts[wallet.publicKey]">
              <div class="flex flex-col space-x-1">
                <ng-container *ngFor="let account of accounts[wallet.publicKey]">
                  <div class="text-sm text-gray-500 flex justify-between items-center py-2">
                    <code>{{ account.account }}</code>
                    <code>{{ account.balance | currency: '':'':'1.0-0' }} KIN</code>
                  </div>
                </ng-container>
              </div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebWalletListComponent {
  @Input() accounts: { [key: string]: KinAccountBalance[] } = {}
  @Input() wallets: Wallet[] = []
}
