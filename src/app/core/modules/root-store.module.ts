import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { reducers } from '../store';
import { AuthEffects } from '../store/effects/auth.effects';
import { LayoutEffects } from '../store/effects/layout.effects';
import { MessageEffects } from '../store/effects/message.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, LayoutEffects, MessageEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class RootStoreModule {}
