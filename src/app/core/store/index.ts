import { ActionReducerMap } from '@ngrx/store';
import { authFeature, IAuthState } from './auth';
import { layoutFeature, ILayoutState } from './layout';
import { pageHeaderFeature, IPageHeaderState } from './page-header';
import { userSettingsFeature, IUserSettingsState } from './user-settings';

export interface IAppState {
  [authFeature.name]: IAuthState;
  [layoutFeature.name]: ILayoutState;
  [pageHeaderFeature.name]: IPageHeaderState;
  [userSettingsFeature.name]: IUserSettingsState;
}

export const reducers: ActionReducerMap<IAppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
  [pageHeaderFeature.name]: pageHeaderFeature.reducer,
  [userSettingsFeature.name]: userSettingsFeature.reducer,
};
