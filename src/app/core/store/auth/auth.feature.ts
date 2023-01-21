import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '@fts-models';
import { authActions } from './auth.actions';

export interface IAuthState {
  user: IUser | null;
}

const initialState: IAuthState = {
  user: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(
      authActions.signInSuccess,
      authActions.profileUpdateSuccess,
      (state, { user }): IAuthState => ({
        ...state,
        user,
      })
    ),
    on(
      authActions.signInFailure,
      authActions.signOutSuccess,
      (state): IAuthState => ({
        ...state,
        user: null,
      })
    ),
  ),
});
