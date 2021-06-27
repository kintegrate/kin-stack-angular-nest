import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserWalletDetailStore } from './user-wallet-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre>{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/wallet/feature/src/lib/user-wallet-detail/user-wallet-detail.component.ts
      </code>
    </ng-container>
  `,
  providers: [UserWalletDetailStore],
})
export class UserWalletDetailComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserWalletDetailStore) {}
}

@NgModule({
  declarations: [UserWalletDetailComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserWalletDetailComponent }])],
})
export class UserWalletDetailModule {}
