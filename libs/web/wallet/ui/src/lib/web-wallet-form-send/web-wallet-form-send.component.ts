import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'
import { WebUiFormField } from '@kin-nxpm-stack/web/ui/form'
import { SendKinInput } from '@kin-nxpm-stack/web/wallet/data-access'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'

@Component({
  selector: 'web-wallet-form-send',
  template: `
    <ng-container *ngIf="!accounts?.length">
      <div class="px-8 py-2 border border-blue-700 text-blue-700 bg-blue-200 rounded">
        <div>No accounts found.</div>
      </div>
    </ng-container>
    <ng-container *ngIf="accounts?.length">
      <div class="flex flex-col space-y-3 p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <ui-form [form]="form" [model]="model" [fields]="fields" (submitForm)="submit($event)">
          <ui-button [disabled]="!form.valid" type="submit" label="Send Kin"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
})
export class WebWalletFormSendComponent implements OnChanges {
  @Input() accounts: KinAccountBalance[]
  @Input() wallet: Wallet
  @Output() send = new EventEmitter<SendKinInput>()
  fields = []
  form = new FormGroup({})
  model = {}
  submit({ amount, account, destination }) {
    this.send.emit({ wallet: this.wallet, account, amount, destination })
  }

  ngOnChanges(): void {
    this.model = {
      balance: this.accounts?.length ? this.accounts[0].account : null,
      amount: '1',
    }
    this.fields = [
      WebUiFormField.radio('account', {
        label: 'Account',
        required: true,
        options:
          this.accounts?.map((bal) => ({ label: `${bal.account} ${bal.balance} KIN`, value: bal.account })) || [],
      }),
      WebUiFormField.input('amount', { label: 'Amount of Kin', required: true, min: 1 }),
      WebUiFormField.input('destination', { label: 'Destination address', required: true, minLength: 20 }),
    ]
  }
}
