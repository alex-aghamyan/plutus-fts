import { AuthError } from '@angular/fire/auth';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Sign In Attempt': emptyProps(),
    'Sign In Success': props<{ user: IUser | null; messageToShow?: string }>(),
    'Sign In Failure': props<{ error: AuthError; messageToShow?: string }>(),
    'Check Is User Signed In': emptyProps(),
  },
});
