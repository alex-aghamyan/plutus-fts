import { ActionReducerMap } from '@ngrx/store';
import {
  authFeature,
  AuthState,
  layoutFeature,
  LayoutState,
  pageHeaderFeature,
  IPageHeaderState,
} from '@fts-store/reducers';

export interface AppState {
  [authFeature.name]: AuthState;
  [layoutFeature.name]: LayoutState;
  [pageHeaderFeature.name]: IPageHeaderState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
  [pageHeaderFeature.name]: pageHeaderFeature.reducer,
};
