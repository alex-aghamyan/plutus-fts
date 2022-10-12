import { IUserSettingsState } from '@fts-store/features';
import { ISettingsFeatureState } from '../settings.store';

export interface ISettingsFeatureVM {
  userSettings: IUserSettingsState;
  settingsFeatureState: ISettingsFeatureState;
}
