import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { authActions } from '../auth/auth.actions';
import { userSettingsActions } from '../user-settings/user-settings.actions';
import { tap } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class NzMessageEffects {
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