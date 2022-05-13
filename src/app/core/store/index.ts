import { ActionReducerMap } from '@ngrx/store';
import { authFeature, AuthState } from './reducers/auth.reducer';
import { layoutFeature, LayoutState } from './reducers/layout.reducer';

export interface AppState {
  [authFeature.name]: AuthState;
  [layoutFeature.name]: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
};
