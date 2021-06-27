import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  AccountUiEmailFormModule,
  AccountUiEmailListModule,
  AccountUiEmailPrimaryFormModule,
} from '@kin-nxpm-stack/mobile/account/ui'
import { MobileUiLoaderModule } from '@kin-nxpm-stack/mobile/ui/loader'
import { AccountEmailComponent } from './account-email.component'

@NgModule({
  declarations: [AccountEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountEmailComponent,
      },
    ]),
    AccountUiEmailListModule,
    AccountUiEmailPrimaryFormModule,
    AccountUiEmailFormModule,
    MobileUiLoaderModule,
  ],
})
export class AccountEmailModule {}
