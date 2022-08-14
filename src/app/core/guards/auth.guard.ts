import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

export const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo('sign-in');
export const redirectLoggedInToDashboard = () => redirectLoggedInTo('dashboard');
