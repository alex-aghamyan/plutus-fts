import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, of, switchMap, take, tap } from 'rxjs';
import { AuthService, FirestoreService } from '@fts-services';
import { coreActions } from '../core/core.actions';
import { authActions } from './auth.actions';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';

@Injectable()
export class AuthEffects {
  readonly actions$ = inject(Actions);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);
  readonly firestoreService = inject(FirestoreService);

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signInAttempt),
      switchMap(() =>
        this.authService.signInWithGoogle().pipe(
          map((user) =>
            authActions.signInSuccess({
              user: user,
              messageToShow: 'Successfully signed in!',
            })
          ),
          tap(({ user }) => {
            if (user.isNewUser) {
              void this.router.navigate([{ outlets: { popup: 'welcome' } }]);
            }
          }),
          catchError(() =>
            of(
              authActions.signInFailure({
                messageToShow: 'Error ocurred during sign in attempt.',
              })
            )
          )
        )
      )
    );
  });

  registerNewUserInFirestore$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(authActions.signInSuccess),
        filter(({ user }) => user.isNewUser),
        switchMap(({ user }) => this.firestoreService.setDoc(user.uid))
      );
    },
    { dispatch: false }
  );

  setUserIfExists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(coreActions.loadApp),
      switchMap(() =>
        this.authService.getSignedInUser().pipe(
          take(1),
          filter((user): user is IUser => !!user),
          map((user) =>
            authActions.signInSuccess({
              user: user,
              messageToShow: 'Successfully signed in!',
            })
          )
        )
      )
    );
  });

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signOutAttempt),
      switchMap(() =>
        this.authService.signOut().pipe(
          switchMap(() => {
            return from(this.router.navigate(['sign-in'])).pipe(
              map(() => {
                return authActions.signOutSuccess({
                  messageToShow: 'Signed out from the system.',
                });
              })
            );
          }),
          catchError(() =>
            of(
              authActions.signOutFailure({
                messageToShow: 'Error ocurred during sign out attempt.',
              })
            )
          )
        )
      )
    );
  });

  profileUpdate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.profileUpdateAttempt),
      switchMap(({ displayName, photoURL }) =>
        this.authService.updateProfile(displayName, photoURL).pipe(
          map((user) =>
            authActions.profileUpdateSuccess({
              user,
              messageToShow: 'Successfully updated!',
            })
          ),
          catchError(() =>
            of(
              authActions.profileUpdateFailure({
                messageToShow: 'Something went wrong during profile update.',
              })
            )
          )
        )
      )
    );
  });
}
