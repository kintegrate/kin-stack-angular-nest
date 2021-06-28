import { Component } from '@angular/core'
import { UserAppSudokuStore } from './user-app-sudoku.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4">
        <div class="flex justify-center p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
          <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70"> tbd </code>
        </div>
      </div>
    </ng-container>
  `,
  providers: [UserAppSudokuStore],
})
export class UserAppSudokuComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserAppSudokuStore) {}
}
