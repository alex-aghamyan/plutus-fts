import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { layoutFeature, LayoutState } from './reducers/layout.reducer';

export interface AppState {
  [fromAuth.authFeature.name]: fromAuth.AuthState;
  [layoutFeature.name]: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeature.name]: fromAuth.authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
};
