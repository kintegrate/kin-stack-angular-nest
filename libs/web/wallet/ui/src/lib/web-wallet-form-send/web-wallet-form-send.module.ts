import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiFormModule } from '@kin-nxpm-stack/web/ui/form'
import { WebWalletFormSendComponent } from './web-wallet-form-send.component'

@NgModule({
  declarations: [WebWalletFormSendComponent],
  exports: [WebWalletFormSendComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class WebWalletFormSendModule {}
