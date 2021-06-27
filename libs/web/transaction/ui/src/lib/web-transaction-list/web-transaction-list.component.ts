import { Component, Input } from '@angular/core'
import { Transaction } from '@kin-nxpm-stack/shared/util/sdk'

@Component({
  selector: 'web-transaction-list',
  template: `
    <div class="flex flex-col space-y-3">
      <ng-container *ngFor="let transaction of transactions">
        <div class="flex justify-between items-center p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 ">
          <div class="flex items-center space-x-2">
            <span *ngIf="transaction.type" class="rounded rounded-full px-2 text-xs bg-green-100 text-green-800">
              {{ transaction.type }}
            </span>
            <div class="flex flex-col">
              <code class="text-sm">{{ transaction.destination }}</code>
              <code class="text-xs text-gray-500">{{ transaction.txid.substr(0, 20) }}...</code>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <code>{{ transaction.amount }} KIN</code>
            <code class="text-xs text-gray-500">{{ transaction.network }}</code>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebTransactionListComponent {
  @Input() transactions: Transaction[] = []
}
