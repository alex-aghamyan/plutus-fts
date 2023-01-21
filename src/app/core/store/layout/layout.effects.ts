import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { LayoutService } from '@fts-services';
import { coreActions } from '../core/core.actions';
import { layoutActions } from './layout.actions';


@Injectable()
export class LayoutEffects {
  readonly actions$ = inject(Actions);
  readonly layoutService = inject(LayoutService);
  
  watchIsMobileLayout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(coreActions.loadApp),
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
