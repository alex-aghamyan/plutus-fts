import { AuthError } from '@angular/fire/auth';
import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import { authActions } from '../actions/auth.actions';

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
    on(
      authActions.signInSuccess,
      (state, action): AuthState => ({
        ...state,
        user: action.user,
        error: null,
      })
    ),
    on(
      authActions.signInFailure,
      (state, action): AuthState => ({
        ...state,
        user: null,
        error: action.error,
      })
    )
  ),
});
