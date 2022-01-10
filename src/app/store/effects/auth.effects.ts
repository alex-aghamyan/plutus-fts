import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAttempt),
      map(() => this.authService.signInWithGoogle()),
      switchMap(() =>
        this.authService.getUser().pipe(
          map((user: User) => authActions.loginSuccess({ data: user })),
          catchError((err: Error) =>
            of(authActions.loginFailure({ error: err }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
