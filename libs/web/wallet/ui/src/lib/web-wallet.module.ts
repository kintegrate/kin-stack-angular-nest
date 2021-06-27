import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebWalletComponent } from './web-wallet.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebWalletComponent],
  exports: [WebWalletComponent],
})
export class WebWalletModule {}
