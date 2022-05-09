import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { LayoutComponent } from './layout.component';
import { FooterActionsComponent } from './components/footer-actions/footer-actions.component';

@NgModule({
  declarations: [LayoutComponent, FooterActionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
