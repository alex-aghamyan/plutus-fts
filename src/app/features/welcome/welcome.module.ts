import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroModule } from '@fts-modules';
import { SettingsModule } from '../settings/settings.module';

import { WelcomeComponent } from './welcome.component';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroModule,
    SettingsModule,
  ],
})
export class WelcomeModule {}
