import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { LayoutService } from '@fts-services';
import { appActions, layoutActions } from '@fts-store/actions';

@Injectable()
export class LayoutEffects {
  readonly actions$ = inject(Actions);
  readonly layoutService = inject(LayoutService);
  
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
}
