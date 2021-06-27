import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateWalletInput, Role } from '@kin-nxpm-stack/web/core/data-access'
import { WebUiFormField } from '@kin-nxpm-stack/web/ui/form'
import { AdminWalletEditStore } from './admin-wallet-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit wallet ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateWallet($event)">
            <ui-button label="Submit" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminWalletEditStore],
})
export class AdminWalletEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [WebUiFormField.input('name', { label: 'Name' })]

  constructor(private readonly store: AdminWalletEditStore) {}

  updateWallet(input: AdminUpdateWalletInput) {
    const { name } = input
    this.store.updateWalletEffect({ name })
  }
}
