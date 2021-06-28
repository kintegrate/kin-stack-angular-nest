import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SnakeAppComponent } from './snake-app.component'
import { BestScoreManager } from './snake-app.storage.service'

@NgModule({
  declarations: [SnakeAppComponent],
  imports: [CommonModule],
  providers: [BestScoreManager],
  exports: [SnakeAppComponent],
})
export class SnakeAppModule {}
