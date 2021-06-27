import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserCreateWalletInput } from '@kin-nxpm-stack/shared/util/sdk'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiFormModule } from '@kin-nxpm-stack/web/ui/form'
import { UserWalletCreateStore } from './user-wallet-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <ui-form [fields]="vm.fields" [model]="vm.input" (submitForm)="create($event)">
          <ui-button type="submit" label="Create Wallet"></ui-button>
        </ui-form>
      </div>
      <pre>{{ vm.wallet | json }}</pre>
      <pre>{{ vm.keys | json }}</pre>
      <pre>{{ vm.input | json }}</pre>
    </ng-container>
  `,
  providers: [UserWalletCreateStore],
})
export class UserWalletCreateComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: UserWalletCreateStore) {}

  create(input: UserCreateWalletInput) {
    this.store.createWalletEffect(input)
  }
}

@NgModule({
  declarations: [UserWalletCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserWalletCreateComponent,
      },
    ]),
    WebUiFormModule,
    WebUiButtonModule,
  ],
})
export class UserWalletCreateModule {}
