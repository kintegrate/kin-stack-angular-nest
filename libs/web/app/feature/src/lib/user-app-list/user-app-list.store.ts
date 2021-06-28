import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService } from '@kin-nxpm-stack/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface UserAppListState {
  items?: Item[]
  loading?: boolean
}

@Injectable()
export class UserAppListStore extends ComponentStore<UserAppListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({})
    this.loadItemsEffect()
  }

  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly vm$ = this.select(this.items$, (items) => ({ items }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([
          { id: 'snake', name: 'Snake' },
          { id: 'sudoku', name: 'Sudoku' },
        ]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
