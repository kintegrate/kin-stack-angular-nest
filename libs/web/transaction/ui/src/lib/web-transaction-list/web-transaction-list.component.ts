import { Component, Input } from '@angular/core'
import { Transaction } from '@kin-nxpm-stack/shared/util/sdk'

@Component({
  selector: 'web-transaction-list',
  template: `
    <div class="flex flex-col space-y-3">
      <ng-container *ngIf="!transactions.length">
        <div class="px-8 py-2 border border-blue-700 text-blue-700 bg-blue-200 rounded">
          <div>No transactions found.</div>
        </div>
      </ng-container>
      <ng-container *ngFor="let transaction of transactions">
        <div class="flex justify-between items-center p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800 ">
          <div class="flex items-center space-x-2">
            <span *ngIf="transaction.type" class="rounded rounded-full px-2 text-xs bg-green-100 text-green-800">
              {{ transaction.type }}
            </span>
            <div class="flex flex-col">
              <code class="text-sm">From: {{ transaction.sender }}</code>
              <code class="text-sm">To: {{ transaction.destination }}</code>
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
