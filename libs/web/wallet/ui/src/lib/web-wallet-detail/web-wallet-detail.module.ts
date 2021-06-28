import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebTransactionListModule } from '@kin-nxpm-stack/web/transaction/ui'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiIconModule } from '@kin-nxpm-stack/web/ui/icon'
import { WebWalletBalanceListModule } from '../web-wallet-balance-list/web-wallet-balance-list.module'
import { WebWalletFormSendModule } from '../web-wallet-form-send/web-wallet-form-send.module'
import { WebWalletDetailComponent } from './web-wallet-detail.component'

@NgModule({
  declarations: [WebWalletDetailComponent],
  exports: [WebWalletDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebUiButtonModule,
    WebWalletFormSendModule,
    WebTransactionListModule,
    WebUiIconModule,
    WebWalletBalanceListModule,
  ],
})
export class WebWalletDetailModule {}
