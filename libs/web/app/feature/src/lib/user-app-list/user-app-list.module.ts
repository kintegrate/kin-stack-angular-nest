import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserAppListComponent } from './user-app-list.component'

@NgModule({
  declarations: [UserAppListComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserAppListComponent }])],
})
export class UserAppListModule {}
