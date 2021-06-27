import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminWalletListComponent } from './admin-wallet-list.component'

@NgModule({
  declarations: [AdminWalletListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminWalletListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminWalletListModule {}
