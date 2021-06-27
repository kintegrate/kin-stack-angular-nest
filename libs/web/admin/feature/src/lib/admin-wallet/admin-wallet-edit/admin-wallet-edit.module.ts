import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiFormModule } from '@kin-nxpm-stack/web/ui/form'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminWalletEditComponent } from './admin-wallet-edit.component'

@NgModule({
  declarations: [AdminWalletEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminWalletEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminWalletEditModule {}
