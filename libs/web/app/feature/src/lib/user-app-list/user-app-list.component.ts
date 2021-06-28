import { Component } from '@angular/core'
import { UserAppListStore } from './user-app-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4">
        <div class="grid grid-cols-4 gap-6">
          <ng-container *ngFor="let item of vm.items">
            <a [routerLink]="item.id" class="flex p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
              <code>{{ item.name }}</code>
            </a>
          </ng-container>
        </div>
      </div>
    </ng-container>
  `,
  providers: [UserAppListStore],
})
export class UserAppListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserAppListStore) {}
}
