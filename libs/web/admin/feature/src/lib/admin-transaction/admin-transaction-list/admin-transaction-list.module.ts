import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminTransactionListComponent } from './admin-transaction-list.component'

@NgModule({
  declarations: [AdminTransactionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminTransactionListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminTransactionListModule {}
