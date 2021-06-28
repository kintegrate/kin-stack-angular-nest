import { Component } from '@angular/core'
import { UserAppSnakeStore } from './user-app-snake.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="h-full flex justify-center items-center">
        <ngx-snake></ngx-snake>
      </div>
    </ng-container>
  `,
  providers: [UserAppSnakeStore],
})
export class UserAppSnakeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserAppSnakeStore) {}
}
