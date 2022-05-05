import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAttempt),
      switchMap(() =>
        from(this.authService.signInWithGoogle()).pipe(
          switchMap(() =>
            this.authService
              .getUser()
              .pipe(
                map((user: IUser) => authActions.loginSuccess({ data: user }))
              )
          ),
          catchError((err: Error) =>
            of(authActions.loginFailure({ error: err }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
