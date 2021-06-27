import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-wallet-list/admin-wallet-list.module').then((m) => m.AdminWalletListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-wallet-create/admin-wallet-create.module').then((m) => m.AdminWalletCreateModule),
      },
      {
        path: ':walletId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-wallet-detail/admin-wallet-detail.module').then((m) => m.AdminWalletDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-wallet-edit/admin-wallet-edit.module').then((m) => m.AdminWalletEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminWalletModule {}
