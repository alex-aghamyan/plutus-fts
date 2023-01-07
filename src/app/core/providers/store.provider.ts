import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers } from '../store';
import {
  AuthEffects,
  LayoutEffects,
  MessageEffects,
  UserSettingsEffects,
} from '@fts-store/effects';
import { EnvironmentProviders } from '@angular/core';

export const STORE_PROVIDERS: EnvironmentProviders[] = [
  provideStore(reducers),
  provideEffects([
    AuthEffects,
    LayoutEffects,
    UserSettingsEffects,
    MessageEffects,
  ]),
  provideStoreDevtools({
    maxAge: 25,
    logOnly: environment.production
  })
]; 
