import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers } from '../store';
import {
  AuthEffects,
  LayoutEffects,
  MessageEffects,
  UserSettingsEffects,
} from '@fts-store/effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AuthEffects,
      LayoutEffects,
      UserSettingsEffects,
      MessageEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class RootStoreModule {}
