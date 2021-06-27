import { Component } from '@angular/core'
import { WebUiFormField } from '@kin-nxpm-stack/web/ui/form'
import { AdminWalletCreateStore } from './admin-wallet-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Wallet" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createWallet($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminWalletCreateStore],
})
export class AdminWalletCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [WebUiFormField.input('name', { label: 'Name' })]
  constructor(private readonly store: AdminWalletCreateStore) {}

  createWallet(input) {
    this.store.createWalletEffect(input)
  }
}
