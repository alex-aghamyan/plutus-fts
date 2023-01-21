import { IUserSettingsState } from '@fts-store/user-settings';
import { ISettingsFeatureState } from '../data-access/settings.store';

export interface ISettingsFeatureVM {
  userSettings: IUserSettingsState;
  settingsFeatureState: ISettingsFeatureState;
}
