import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import * as layoutActions from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {
  setLayoutType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(layoutActions.checkLayout),
      switchMap(() =>
        this.layoutService
          .observeHandset()
          .pipe(
            map((layout) =>
              layoutActions.setLayoutIsMobile({ isMobile: layout.matches })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private layoutService: LayoutService
  ) {}
}
