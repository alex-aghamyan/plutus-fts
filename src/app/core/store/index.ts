import { ActionReducerMap } from '@ngrx/store';
import { authFeature, IAuthState } from './auth';
import { layoutFeature, ILayoutState } from './layout';
import { userSettingsFeature, IUserSettingsState } from './user-settings';

export interface IAppState {
  [authFeature.name]: IAuthState;
  [layoutFeature.name]: ILayoutState;
  [userSettingsFeature.name]: IUserSettingsState;
}

export const reducers: ActionReducerMap<IAppState> = {
  [authFeature.name]: authFeature.reducer,
  [layoutFeature.name]: layoutFeature.reducer,
  [userSettingsFeature.name]: userSettingsFeature.reducer,
};
