import { ActionReducerMap } from '@ngrx/store';
import {
  authFeature,
  AuthState,
  layoutFeature,
  LayoutState,
} from '@fts-store/reducers';

export interface AppState {
  [authFeature.name]: AuthState;
  [layoutFeature.name]: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
};
