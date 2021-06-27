import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminTransactionDetailComponent } from './admin-transaction-detail.component'

@NgModule({
  declarations: [AdminTransactionDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminTransactionDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminTransactionDetailModule {}
