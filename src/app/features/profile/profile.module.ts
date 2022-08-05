import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { NgZorroModule } from 'src/app/core/modules/ng-zorro.module';

import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgZorroModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfileModule {}
