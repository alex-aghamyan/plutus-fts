import { canActivate } from '@angular/fire/auth-guard';
import { Routes, TitleStrategy } from '@angular/router';
import {
  redirectLoggedInToDashboard,
  redirectUnauthorizedToSignIn,
} from '@fts-guards';
import { CustomTitleStrategyService } from '@fts-services';

import { SignInComponent } from './features/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  {
    path: 'sign-in',
    component: SignInComponent,
    ...canActivate(redirectLoggedInToDashboard),
  },
  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () => import('./features/profile/profile.component'),
    ...canActivate(redirectUnauthorizedToSignIn),
  },
  {
    path: 'welcome',
    outlet: 'popup',
    loadComponent: () => import('./features/welcome/welcome.component'),
    ...canActivate(redirectUnauthorizedToSignIn),
  },
];

export const CUSTOM_TITLE_STRATEGY_PROVIDER = {
  provide: TitleStrategy,
  useClass: CustomTitleStrategyService,
};
