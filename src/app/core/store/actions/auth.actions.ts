import { AuthError } from '@angular/fire/auth';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '@fts-models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign In Attempt': emptyProps(),
    'Sign In Success': props<{ user: IUser | null; messageToShow?: string }>(),
    'Sign In Failure': props<{ error: AuthError; messageToShow?: string }>(),
    'Sign Out Attempt': emptyProps(),
    'Sign Out Success': props<{ user: null; messageToShow?: string }>(),
    'Sign Out Failure': props<{ error: AuthError; messageToShow?: string }>(),
  },
});
