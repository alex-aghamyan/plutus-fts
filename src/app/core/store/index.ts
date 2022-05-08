import { ActionReducerMap } from '@ngrx/store';
import { authFeature, AuthState } from './reducers/auth.reducer';

export interface AppState {
  [authFeature.name]: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeature.name]: authFeature.reducer,
};
