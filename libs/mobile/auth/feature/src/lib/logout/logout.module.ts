import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@kin-nxpm-stack/mobile/auth/data-access'
import { MobileUiFormModule } from '@kin-nxpm-stack/mobile/ui/form'
import { AuthPageModule } from '@kin-nxpm-stack/mobile/auth/ui'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobileUiFormModule,
    AuthPageModule,
    MobileAuthDataAccessModule,
  ],
})
export class LogoutModule {}
