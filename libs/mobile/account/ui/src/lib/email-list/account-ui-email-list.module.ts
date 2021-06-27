import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiIconModule } from '@kin-nxpm-stack/mobile/ui/icon'
import { AccountUiEmailListComponent } from './account-ui-email-list.component'

@NgModule({
  exports: [AccountUiEmailListComponent],
  declarations: [AccountUiEmailListComponent],
  imports: [CommonModule, RouterModule, MobileUiIconModule],
})
export class AccountUiEmailListModule {}
