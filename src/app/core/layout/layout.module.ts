import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../modules/shared.module';
import { NgZorroModule } from '../modules/ng-zorro.module';

import { LayoutComponent } from './layout.component';
import { FooterActionsComponent } from './components/footer-actions/footer-actions.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SiderUserInfoComponent } from './components/sider-user-info/sider-user-info.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterActionsComponent,
    MainMenuComponent,
    SiderUserInfoComponent,
    PageHeaderComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, NgZorroModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
