import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, of, switchMap, take } from 'rxjs';
import { AuthService } from '@fts-services';
import { appActions, authActions } from '@fts-store/actions';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.model';

@Injectable()
export class AuthEffects {
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

  setUserIfExists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.loadApp),
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
      switchMap((action) =>
        this.authService
          .updateProfile(action.displayName, action.photoURL)
          .pipe(
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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
