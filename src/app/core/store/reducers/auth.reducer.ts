import { AuthError } from '@angular/fire/auth';
import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import * as authActions from '../actions/auth.actions';

export interface AuthState {
  user: IUser | null;
  error: AuthError | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.signInSuccess, (state, action) => ({
      ...state,
      user: action.user,
      error: null,
    })),
    on(authActions.signInFailure, (state, action) => ({
      ...state,
      user: null,
      error: action.error,
    }))
  ),
});
