import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { authActions } from '@fts-store/actions';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class MessageEffects {
  showSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.signInSuccess),
        tap((action) => {
          if (action.messageToShow) {
            this.message.success(action.messageToShow);
          }
        })
      );
    },
    { dispatch: false }
  );

  showError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.signInFailure, authActions.signOutFailure),
        tap((action) => {
          if (action.messageToShow) {
            this.message.error(action.messageToShow);
          }
        })
      );
    },
    { dispatch: false }
  );

  showInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.signOutSuccess),
        tap((action) => {
          if (action.messageToShow) {
            this.message.info(action.messageToShow);
          }
        })
      );
    },
    { dispatch: false }
  );

  showWarning$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(),
        tap((action) => this.message.warning(''))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private message: NzMessageService) {}
}
