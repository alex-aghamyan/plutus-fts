import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { authActions, userSettingsActions } from '@fts-store/actions';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class MessageEffects {
  readonly actions$ = inject(Actions);
  readonly message = inject(NzMessageService);
  
  showSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          authActions.signInSuccess,
          authActions.profileUpdateSuccess,
          userSettingsActions.setUserSettingsSuccess
        ),
        tap((action) => this.message.success(action.messageToShow))
      );
    },
    { dispatch: false }
  );

  showError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          authActions.signInFailure,
          authActions.signOutFailure,
          authActions.profileUpdateFailure,
          userSettingsActions.loadUserSettingsFailure,
          userSettingsActions.setUserSettingsFailure
        ),
        tap((action) => this.message.error(action.messageToShow))
      );
    },
    { dispatch: false }
  );

  showInfo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.signOutSuccess),
        tap((action) => this.message.info(action.messageToShow))
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
}
