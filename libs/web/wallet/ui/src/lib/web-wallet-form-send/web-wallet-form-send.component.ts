import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Wallet } from '@kin-nxpm-stack/shared/util/sdk'
import { WebUiFormField } from '@kin-nxpm-stack/web/ui/form'
import { SendKinInput } from '@kin-nxpm-stack/web/wallet/data-access'
import { KinAccountBalance } from '@kin-sdk/client/src/lib/agora/kin-agora-client'

@Component({
  selector: 'web-wallet-form-send',
  template: `
    <ng-container>
      <div class="flex flex-col space-y-3 p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <div class="flex justify-between items-center">
          <code>{{ balance.account }}</code>
          <code>{{ balance.balance }} KIN</code>
        </div>
        <ui-form [fields]="fields" (submitForm)="submit($event)">
          <ui-button type="submit" label="Send Kin"></ui-button>
        </ui-form>
        <pre>{{ balance | json }}</pre>
      </div>
    </ng-container>
  `,
})
export class WebWalletFormSendComponent {
  fields = [
    WebUiFormField.input('amount', { label: 'Amount of Kin', required: true, min: 1 }),
    WebUiFormField.input('destination', { label: 'Destination address', required: true, minLength: 20 }),
  ]
  @Input() balance: KinAccountBalance
  @Input() wallet: Wallet
  @Output() send = new EventEmitter<SendKinInput>()

  submit({ amount, destination }) {
    this.send.emit({ wallet: this.wallet, balance: this.balance, amount, destination })
  }
}
