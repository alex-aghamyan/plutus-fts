import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { CUSTOM_TITLE_STRATEGY_PROVIDER, routes } from './app/app.routing';
import { AppComponent } from './app/app.component';

import {
  FIREBASE_PROVIDERS,
  STORE_PROVIDERS,
  NZ_I18N_PROVIDER,
} from '@fts-providers';

import { NzMessageModule } from 'ng-zorro-antd/message';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FIREBASE_PROVIDERS, NzMessageModule),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    STORE_PROVIDERS,
    CUSTOM_TITLE_STRATEGY_PROVIDER,
    NZ_I18N_PROVIDER,
  ],
}).catch((err) => console.error(err));
