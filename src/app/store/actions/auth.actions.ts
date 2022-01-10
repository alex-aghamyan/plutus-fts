import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user';

export const loginAttempt = createAction('[Auth] Login Attempt');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
