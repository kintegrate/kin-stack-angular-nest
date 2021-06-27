import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserWalletListStore } from './user-wallet-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre>{{ vm | json }}</pre>
      </div>
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
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserWalletListComponent }])],
})
export class UserWalletListModule {}
