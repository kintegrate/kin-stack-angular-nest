import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IsAdminGuard, IsLoggedInGuard, WebAuthDataAccessModule } from '@kin-nxpm-stack/web/auth/data-access'
import { WebLayoutComponent, WebLayoutModule } from '@kin-nxpm-stack/web/layout'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'transactions',
        loadChildren: () =>
          import('@kin-nxpm-stack/web/transaction/feature').then((m) => m.WebTransactionFeatureModule),
      },
      {
        path: 'wallets',
        loadChildren: () => import('@kin-nxpm-stack/web/wallet/feature').then((m) => m.WebWalletFeatureModule),
      },
      {
        path: 'apps',
        loadChildren: () => import('@kin-nxpm-stack/web/app/feature').then((m) => m.WebAppFeatureModule),
      },
      {
        path: 'about',
        loadChildren: () => import('@kin-nxpm-stack/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@kin-nxpm-stack/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        canActivate: [IsAdminGuard],
        loadChildren: () => import('@kin-nxpm-stack/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@kin-nxpm-stack/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@kin-nxpm-stack/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    WebAuthDataAccessModule,
    WebLayoutModule,
  ],
})
export class WebShellFeatureModule {
  constructor(private readonly wallet: WebWalletDataAccessStore) {}
}
