import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@kin-nxpm-stack/web/ui/button'
import { WebUiPageModule } from '@kin-nxpm-stack/web/ui/page'
import { WebDashboardFeatureComponent } from './web-dashboard-feature.component'

@NgModule({
  declarations: [WebDashboardFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDashboardFeatureComponent }]),
    WebUiButtonModule,
    WebUiPageModule,
  ],
})
export class WebDashboardFeatureModule {}
