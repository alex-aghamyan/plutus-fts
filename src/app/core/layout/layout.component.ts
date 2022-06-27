import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterAction } from '../models/footer-actions.model';
import { IInitialViewModel } from '../models/initial-view-model.model';
import { authActions } from '../store/actions/auth.actions';
import { layoutActions } from '../store/actions/layout.actions';
import { selectInitialViewModel } from '../store/selectors/initial.selectors';

@Component({
  selector: 'fts-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  openMenu = false;
  initialViewModel$: Observable<IInitialViewModel> = this.store.select(
    selectInitialViewModel
  );

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(layoutActions.checkLayout());
    this.store.dispatch(authActions.checkIsUserSignedIn());
  }

  handleFooterAction(action: FooterAction): void {
    switch (action) {
      case 'toggleMenu':
        this.toggleMenu();
        break;

      case 'addIncomeOrExpense':
        this.addIncomeOrExpense();
        break;

      case 'openProfile':
        this.openProfile();
        break;
    }
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  addIncomeOrExpense(): void {}

  openProfile(): void {
    void this.router.navigate(['profile']);
  }
}
