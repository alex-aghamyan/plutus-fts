import { ActionReducerMap } from '@ngrx/store';
import {
  authFeature,
  IAuthState,
  layoutFeature,
  ILayoutState,
  pageHeaderFeature,
  IPageHeaderState,
} from '@fts-store/features';

export interface IAppState {
  [authFeature.name]: IAuthState;
  [layoutFeature.name]: ILayoutState;
  [pageHeaderFeature.name]: IPageHeaderState;
}

export const reducers: ActionReducerMap<IAppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
  [pageHeaderFeature.name]: pageHeaderFeature.reducer,
};
