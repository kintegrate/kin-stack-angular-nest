import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebTransactionListComponent } from './web-transaction-list.component'

@NgModule({
  declarations: [WebTransactionListComponent],
  exports: [WebTransactionListComponent],
  imports: [CommonModule, RouterModule],
})
export class WebTransactionListModule {}
