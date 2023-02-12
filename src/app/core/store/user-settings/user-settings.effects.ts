import { inject, Injectable } from '@angular/core';
import { authActions, authFeature } from '@fts-store/auth';
import { userSettingsActions } from './user-settings.actions';
import { IUserSettingsState } from './user-settings.feature';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { FirestoreService } from '@fts-services';
import { IUser } from '@fts-models';

@Injectable()
export class UserSettingsEffects {
  readonly actions$ = inject(Actions);
  readonly firestoreService = inject(FirestoreService);
  readonly store = inject(Store);

  loadUserSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signInSuccess),
      switchMap(({ user }) =>
        this.firestoreService.getDoc(`${user.uid}`).pipe(
          filter((data): data is IUserSettingsState => !!data),
          map((settings) => 
            userSettingsActions.loadUserSettingsSuccess({ settings })
          ),
          catchError(() =>
            of(
              userSettingsActions.loadUserSettingsFailure({
                messageToShow: 'Failed to load settings.',
              })
            )
          )
        )
      )
    );
  });

  setUserSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userSettingsActions.setUserSettings),
      concatLatestFrom(() =>
        this.store
          .select(authFeature.selectUser)
          .pipe(filter((user): user is IUser => !!user))
      ),
      switchMap(([{ settings }, user]) =>
        this.firestoreService.setDoc(`${user.uid}`, settings).pipe(
          map(() =>
            userSettingsActions.setUserSettingsSuccess({
              settings,
              messageToShow: 'Settings has been updated!',
            })
          ),
          catchError(() =>
            of(
              userSettingsActions.setUserSettingsFailure({
                messageToShow: 'Failed to save settings.',
              })
            )
          )
        )
      )
    );
  });
}
