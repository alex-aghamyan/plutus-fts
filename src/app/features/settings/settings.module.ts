import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroModule, SharedModule } from '@fts-modules';

import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, NgZorroModule, FormsModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
