import { Injectable } from '@angular/core';
import { authActions, userSettingsActions } from '@fts-store/actions';
import { selectUser, IUserSettingsState } from '@fts-store/features';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { FirestoreService } from '@fts-services';
import { IUser } from '@fts-models';

@Injectable()
export class UserSettingsEffects {
  loadUserSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signInSuccess),
      switchMap((action) =>
        this.firestore.getDoc(`settings/${action.user.uid}`).pipe(
          filter((data): data is IUserSettingsState => !!data),
          map((settings) => userSettingsActions.loadUserSettingsSuccess({ settings })),
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
          .select(selectUser)
          .pipe(filter((user): user is IUser => !!user))
      ),
      switchMap(([action, user]) =>
        this.firestore.setDoc(`settings/${user.uid}`, action.settings).pipe(
          map(() =>
            userSettingsActions.setUserSettingsSuccess({
              settings: action.settings,
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

  constructor(
    private actions$: Actions,
    private firestore: FirestoreService,
    private store: Store
  ) {}
}
