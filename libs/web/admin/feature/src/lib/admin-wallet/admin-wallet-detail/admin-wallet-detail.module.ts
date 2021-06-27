import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminWalletDetailComponent } from './admin-wallet-detail.component'

@NgModule({
  declarations: [AdminWalletDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminWalletDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminWalletDetailModule {}
