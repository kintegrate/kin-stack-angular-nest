import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiButtonModule } from '@kin-nxpm-stack/mobile/ui/button'
import { MobileUiFormModule } from '@kin-nxpm-stack/mobile/ui/form'
import { AccountUiEmailFormComponent } from './account-ui-email-form.component'

@NgModule({
  exports: [AccountUiEmailFormComponent],
  declarations: [AccountUiEmailFormComponent],
  imports: [CommonModule, RouterModule, MobileUiFormModule, MobileUiButtonModule],
})
export class AccountUiEmailFormModule {}
