import { AuthError } from '@angular/fire/auth';
import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '@fts-models';
import { authActions } from '@fts-store/actions';

export interface IAuthState {
  user: IUser | null;
  error: AuthError | null;
}

const initialState: IAuthState = {
  user: null,
  error: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(
      authActions.signInSuccess,
      (state, action): IAuthState => ({
        ...state,
        user: action.user,
        error: null,
      })
    ),
    on(
      authActions.signInFailure,
      (state, action): IAuthState => ({
        ...state,
        user: null,
        error: action.error,
      })
    ),
    on(
      authActions.signOutSuccess,
      authActions.profileUpdateSuccess,
      (state, action): IAuthState => ({
        ...state,
        user: action.user,
        error: null,
      })
    ),
    on(
      authActions.signOutFailure,
      (state, action): IAuthState => ({
        ...state,
        error: action.error,
      })
    )
  ),
});

export const { selectAuthState, selectError, selectUser } = authFeature;
