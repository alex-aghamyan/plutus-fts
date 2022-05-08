import { Injectable } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signInAttempt),
      switchMap(() =>
        this.authService.signInWithGoogle().pipe(
          map((user) => authActions.signInSuccess({ user: user })),
          catchError((error: AuthError) =>
            of(authActions.signInFailure({ error: error }))
          )
        )
      )
    )
  );

  setUserIfExists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.checkIsUserSignedIn),
      switchMap(() =>
        this.authService
          .getSignedInUser()
          .pipe(map((user) => authActions.signInSuccess({ user: user })))
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
