import { Component, Input } from '@angular/core'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'

@Component({
  selector: 'web-wallet-account-list',
  template: `
    <div class="flex flex-col space-y-3">
      <ng-container *ngIf="!accounts?.length">
        <div class="px-8 py-2 border border-blue-700 text-blue-700 bg-blue-200 rounded">
          <div>No accounts found.</div>
        </div>
      </ng-container>
      <ng-container *ngFor="let account of accounts">
        <div class="flex flex-col space-y-3 p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
          <div class="flex justify-between items-center">
            <code>{{ account.account }}</code>
            <code>{{ account.balance }} KIN</code>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebWalletBalanceListComponent {
  @Input() accounts: KinAccountBalance[]
}
