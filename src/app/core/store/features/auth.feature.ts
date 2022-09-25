import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '@fts-models';
import { authActions } from '@fts-store/actions';

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
      (state, action): IAuthState => ({
        ...state,
        user: action.user,
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

export const { selectAuthState, selectUser } = authFeature;
