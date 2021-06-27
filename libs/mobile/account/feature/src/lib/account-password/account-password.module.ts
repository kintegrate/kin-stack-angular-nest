import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountUiPasswordFormModule } from '@kin-nxpm-stack/mobile/account/ui'
import { MobileUiLoaderModule } from '@kin-nxpm-stack/mobile/ui/loader'
import { AccountPasswordComponent } from './account-password.component'

@NgModule({
  declarations: [AccountPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AccountPasswordComponent }]),
    AccountUiPasswordFormModule,
    MobileUiLoaderModule,
  ],
})
export class AccountPasswordModule {}
