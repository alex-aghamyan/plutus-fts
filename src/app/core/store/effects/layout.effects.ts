import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { checkLayout, setLayoutIsMobile } from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {
  layout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkLayout),
      switchMap(() =>
        this.layoutService
          .observeHandset()
          .pipe(
            map((layout) => setLayoutIsMobile({ isMobile: layout.matches }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private layoutService: LayoutService
  ) {}
}
