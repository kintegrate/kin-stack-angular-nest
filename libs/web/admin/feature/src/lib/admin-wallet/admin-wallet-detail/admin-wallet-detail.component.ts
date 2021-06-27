import { Component } from '@angular/core'
import { AdminWalletDetailStore } from './admin-wallet-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Wallet ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {{ vm.item?.name }}
                </div>
                <div class="text-lg text-gray-500">
                  {{ vm.item?.updatedAt | date: 'short' }}
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <ui-button link="edit" label="Edit"></ui-button>
              <ui-button (handler)="deleteItem(vm.item)" label="Delete"></ui-button>
            </div>
          </div>
        </div>
        <pre class="mt-6 dark:bg-gray-800 p-4 text-xs shadow rounded-md">{{ vm.item | json }}</pre>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminWalletDetailStore],
})
export class AdminWalletDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminWalletDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteWalletEffect(item)
    }
  }
}
