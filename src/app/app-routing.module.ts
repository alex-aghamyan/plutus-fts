import { NgModule } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { CustomTitleStrategyService } from '@fts-services';
import {
  redirectLoggedInToDashboard,
  redirectUnauthorizedToSignIn,
} from '@fts-guards';

import { SignInComponent } from './features/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  {
    path: 'sign-in',
    component: SignInComponent,
    ...canActivate(redirectLoggedInToDashboard),
  },
  {
    path: 'profile',
    title: 'Profile',
    loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule),
    ...canActivate(redirectUnauthorizedToSignIn),
  },
  {
    path: 'welcome',
    outlet: 'popup',
    loadChildren: () => import('./features/welcome/welcome.module').then((m) => m.WelcomeModule),
    ...canActivate(redirectUnauthorizedToSignIn),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategyService,
    },
  ],
})
export class AppRoutingModule {}
