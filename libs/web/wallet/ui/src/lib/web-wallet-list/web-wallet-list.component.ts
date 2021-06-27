import { Component, Input } from '@angular/core'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'

@Component({
  selector: 'web-wallet-list',
  template: `
    <div class="flex flex-col space-y-3">
      <ng-container *ngFor="let wallet of wallets">
        <div class="flex justify-between items-center p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
          <a [routerLink]="wallet.id">
            <code>{{ wallet.publicKey }}</code>
          </a>
          <code>{{ wallet.network }}</code>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebWalletListComponent {
  @Input() wallets: Wallet[] = []
}
