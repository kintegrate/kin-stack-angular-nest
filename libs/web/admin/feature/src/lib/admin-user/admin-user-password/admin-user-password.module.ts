import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUserFormModule } from '@kin-nxpm-stack/web/admin/ui'
import { WebUiPageHeaderModule } from '@kin-nxpm-stack/web/ui/page-header'

import { AdminUserPasswordComponent } from './admin-user-password.component'

@NgModule({
  declarations: [AdminUserPasswordComponent],
  imports: [
    AdminUserFormModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserPasswordComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminUserPasswordModule {}
