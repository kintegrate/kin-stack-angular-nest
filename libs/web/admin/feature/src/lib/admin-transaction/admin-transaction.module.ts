import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./admin-transaction-list/admin-transaction-list.module').then((m) => m.AdminTransactionListModule),
      },
      {
        path: ':transactionId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-transaction-detail/admin-transaction-detail.module').then(
                (m) => m.AdminTransactionDetailModule,
              ),
          },
        ],
      },
    ]),
  ],
})
export class AdminTransactionModule {}
