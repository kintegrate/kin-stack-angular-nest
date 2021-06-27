import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MobileUiButtonModule } from '@kin-nxpm-stack/mobile/ui/button'
import { MobileUiPageModule } from '@kin-nxpm-stack/mobile/ui/page'
import { MobileDashboardFeatureComponent } from './mobile-dashboard-feature.component'

@NgModule({
  declarations: [MobileDashboardFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MobileDashboardFeatureComponent,
      },
    ]),
    MobileUiButtonModule,
    MobileUiPageModule,
  ],
})
export class MobileDashboardFeatureModule {}
