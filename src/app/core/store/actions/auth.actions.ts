import { AuthError } from '@angular/fire/auth';
import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export const signInAttempt = createAction('[Auth] Sign In Attempt');

export const signInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ user: IUser | null; messageToShow?: string }>()
);

export const signInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: AuthError; messageToShow?: string }>()
);

export const checkIsUserSignedIn = createAction(
  '[Auth] Check Whether User Is Signed In'
);
