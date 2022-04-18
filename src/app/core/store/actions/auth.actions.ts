import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export const loginAttempt = createAction('[Auth] Login Attempt');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: IUser }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
