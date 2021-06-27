import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiFormModule } from '@kin-nxpm-stack/web/ui/form'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminWalletCreateComponent } from './admin-wallet-create.component'

@NgModule({
  declarations: [AdminWalletCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminWalletCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminWalletCreateModule {}
