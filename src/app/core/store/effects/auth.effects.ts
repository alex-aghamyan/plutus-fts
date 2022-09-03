import { Injectable } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, of, switchMap, take } from 'rxjs';
import { AuthService } from '@fts-services';
import { appActions, authActions } from '@fts-store/actions';
import { Router } from '@angular/router';

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
          catchError((error: AuthError) =>
            of(
              authActions.signInFailure({
                error: error,
                messageToShow: error.code,
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
          filter((user) => !!user),
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
                  user: null,
                  messageToShow: 'Signed out from the system.',
                });
              })
            );
          }),
          catchError((error: AuthError) =>
            of(
              authActions.signOutFailure({
                error,
                messageToShow:
                  error.code || 'Error ocurred during sign out attempt.',
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
