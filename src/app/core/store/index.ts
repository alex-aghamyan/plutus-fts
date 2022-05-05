import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';

export interface AppState {
  [fromAuth.authFeature.name]: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeature.name]: fromAuth.authFeature.reducer,
};
