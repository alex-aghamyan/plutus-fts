import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@fts-modules';
import { NgZorroModule } from '@fts-modules';
import { SettingsModule } from '../settings/settings.module';

import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgZorroModule,
    RouterModule.forChild(routes),
    SettingsModule,
  ],
})
export class ProfileModule {}
