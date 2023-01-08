import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterAction } from '../models/footer-actions.model';
import { IInitialViewModel } from '../models/initial-view-model.model';
import { appActions } from '../store/actions/app.actions';
import { selectInitialViewModel } from '../store/selectors/initial.selectors';
import { FooterActionsComponent } from './components/footer-actions/footer-actions.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SiderUserInfoComponent } from './components/sider-user-info/sider-user-info.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'fts-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainMenuComponent,
    FooterActionsComponent,
    PageHeaderComponent,
    SiderUserInfoComponent,
    NzLayoutModule,
    LetModule,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  openMenu = false;
  readonly store = inject(Store);
  readonly router = inject(Router);
  readonly initialViewModel$: Observable<IInitialViewModel> = this.store.select(
    selectInitialViewModel
  );

  ngOnInit(): void {
    this.store.dispatch(appActions.loadApp());
  }

  handleFooterAction(action: FooterAction): void {
    switch (action) {
      case 'toggleMenu':
        this.toggleMenu();
        break;

      case 'addTransaction':
        this.addTransaction();
        break;

      case 'openProfile':
        this.openProfile();
        break;
    }
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  addTransaction(): void {}

  openProfile(): void {
    void this.router.navigate(['profile']);
  }
}
