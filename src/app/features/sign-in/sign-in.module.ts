import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { NgZorroModule } from 'src/app/core/modules/ng-zorro.module';

import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SharedModule, NgZorroModule, ReactiveFormsModule],
})
export class SignInModule {}
