import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Admin" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebAdminFeatureComponent {
  links = [
    { label: 'Dashboard', path: 'dashboard', icon: '' },
    { label: 'Transactions', path: 'transactions', icon: '' },
    { label: 'Wallets', path: 'wallets', icon: '' },
    { label: 'Users', path: 'users', icon: '' },
  ]
}
