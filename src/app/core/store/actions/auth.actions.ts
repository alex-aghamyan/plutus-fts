import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser, IMessageToShow } from '@fts-models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign In Attempt': emptyProps(),
    'Sign In Success': props<{ user: IUser; messageToShow: string }>(),
    'Sign In Failure': props<IMessageToShow>(),
    'Sign Out Attempt': emptyProps(),
    'Sign Out Success': props<IMessageToShow>(),
    'Sign Out Failure': props<IMessageToShow>(),
    'Profile Update Attempt': props<{ displayName?: string; photoURL?: string }>(),
    'Profile Update Success': props<{ user: IUser; messageToShow: string }>(),
    'Profile Update Failure': props<IMessageToShow>(),
  },
});
