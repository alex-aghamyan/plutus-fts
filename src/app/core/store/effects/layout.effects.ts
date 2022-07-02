import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { appActions } from '../actions/app.actions';
import { layoutActions } from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {
  watchIsMobileLayout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.loadApp),
      switchMap(() =>
        this.layoutService
          .observeHandset()
          .pipe(
            map((layout) =>
              layoutActions.setIsMobileLayout({ isMobile: layout.matches })
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private layoutService: LayoutService
  ) {}
}
