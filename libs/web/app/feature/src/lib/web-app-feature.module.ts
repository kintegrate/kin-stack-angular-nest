import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', loadChildren: () => import('./user-app-list/user-app-list.module').then((m) => m.UserAppListModule) },
      {
        path: 'snake',
        loadChildren: () => import('./user-app-snake/user-app-snake.module').then((m) => m.UserAppSnakeModule),
      },
    ]),
  ],
})
export class WebAppFeatureModule {}
