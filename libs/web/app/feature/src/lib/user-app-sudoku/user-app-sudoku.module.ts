import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserAppSudokuComponent } from './user-app-sudoku.component'

@NgModule({
  declarations: [UserAppSudokuComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserAppSudokuComponent }])],
})
export class UserAppSudokuModule {}
