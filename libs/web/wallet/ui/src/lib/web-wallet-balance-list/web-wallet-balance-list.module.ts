import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebWalletBalanceListComponent } from './web-wallet-balance-list.component'

@NgModule({
  declarations: [WebWalletBalanceListComponent],
  exports: [WebWalletBalanceListComponent],
  imports: [CommonModule, RouterModule, WebUiButtonModule],
})
export class WebWalletBalanceListModule {}
