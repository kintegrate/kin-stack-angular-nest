import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebWalletListComponent } from './web-wallet-list.component'

@NgModule({
  declarations: [WebWalletListComponent],
  exports: [WebWalletListComponent],
  imports: [CommonModule, RouterModule],
})
export class WebWalletListModule {}
