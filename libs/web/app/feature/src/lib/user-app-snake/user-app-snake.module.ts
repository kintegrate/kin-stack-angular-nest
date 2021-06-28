import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SnakeAppModule } from './snake-app/snake-app.module'
import { UserAppSnakeComponent } from './user-app-snake.component'

@NgModule({
  declarations: [UserAppSnakeComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserAppSnakeComponent }]), SnakeAppModule],
})
export class UserAppSnakeModule {}
