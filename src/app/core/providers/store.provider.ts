import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers } from '../store';
import { EnvironmentProviders } from '@angular/core';

import { AuthEffects } from '@fts-store/auth';
import { NzMessageEffects } from '@fts-store/core';
import { LayoutEffects } from '@fts-store/layout';
import { UserSettingsEffects } from '@fts-store/user-settings';

export const STORE_PROVIDERS: EnvironmentProviders[] = [
  provideStore(reducers),
  provideEffects([
    AuthEffects,
    LayoutEffects,
    UserSettingsEffects,
    NzMessageEffects,
  ]),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: environment.production
  })
]; 
