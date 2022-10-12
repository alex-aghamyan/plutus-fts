import { createActionGroup, props } from '@ngrx/store';
import { IMessageToShow } from '@fts-models';
import { IUserSettingsState } from '@fts-store/features';

export const userSettingsActions = createActionGroup({
  source: 'User Settings',
  events: {
    'Load User Settings Success': props<{ settings: IUserSettingsState }>(),
    'Load User Settings Failure': props<IMessageToShow>(),
    'Set User Settings': props<{ settings: IUserSettingsState}>(),
    'Set User Settings Success': props<{ settings: IUserSettingsState } & IMessageToShow>(),
    'Set User Settings Failure': props<IMessageToShow>(),
  },
});
