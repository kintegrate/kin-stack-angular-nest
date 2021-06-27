import { Component } from '@angular/core'

@Component({
  template: `
    <ui-page headerTitle="Wallets">
      <header>
        <ui-button label="Create Wallet" link="create"></ui-button>
      </header>
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class WebWalletFeatureComponent {}
