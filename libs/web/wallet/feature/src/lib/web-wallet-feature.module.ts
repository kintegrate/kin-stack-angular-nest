import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiPageModule } from '@kin-nxpm-stack/web/ui/page'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { WebWalletFeatureComponent } from './web-wallet-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebWalletFeatureComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./user-wallet-list/user-wallet-list.component').then((m) => m.UserWalletListModule),
          },
          {
            path: 'create',
            loadChildren: () =>
              import('./user-wallet-create/user-wallet-create.component').then((m) => m.UserWalletCreateModule),
          },
          {
            path: ':walletId',
            loadChildren: () =>
              import('./user-wallet-detail/user-wallet-detail.component').then((m) => m.UserWalletDetailModule),
          },
        ],
      },
    ]),
    WebUiPageModule,
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
  declarations: [WebWalletFeatureComponent],
})
export class WebWalletFeatureModule {}
