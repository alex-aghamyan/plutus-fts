import { IUserSettingsState } from '@fts-store/user-settings';
import { ISettingsFeatureState } from '../settings.store';

export interface ISettingsFeatureVM {
  userSettings: IUserSettingsState;
  settingsFeatureState: ISettingsFeatureState;
}
