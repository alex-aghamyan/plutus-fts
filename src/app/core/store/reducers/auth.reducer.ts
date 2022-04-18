import { createFeature, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import * as authActions from '../actions/auth.actions';

export interface AuthState {
  user: IUser | null;
}

export const initialState: AuthState = {
  user: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      user: {
        uid: action.data.uid,
        displayName: action.data.displayName,
        email: action.data.email,
        photoURL: action.data.photoURL,
      },
    })),
    on(authActions.loginFailure, (state) => ({
      ...state,
      user: {
        uid: null,
        displayName: null,
        email: null,
        photoURL: null,
      },
    }))
  ),
});
