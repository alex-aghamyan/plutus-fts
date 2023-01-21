import { userSettingsActions } from './user-settings.actions';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ICurrency } from '@fts-models';

export interface IUserSettingsState {
  preferredCurrency: ICurrency;
}

const initialState: IUserSettingsState = {
  preferredCurrency: {
    code: '',
    id: 0,
    name: '',
    symbol: '',
  },
};

export const userSettingsFeature = createFeature({
  name: 'userSettings',
  reducer: createReducer(
    initialState,
    on(
      userSettingsActions.loadUserSettingsSuccess,
      userSettingsActions.setUserSettingsSuccess,
      (state, action): IUserSettingsState => ({
        ...state,
        ...action.settings,
      })
    )
  ),
});
