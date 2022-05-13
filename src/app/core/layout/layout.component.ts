import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterAction } from '../models/footer-actions.model';
import { checkLayout } from '../store/actions/layout.actions';
import { LayoutState } from '../store/reducers/layout.reducer';
import { selectLayout } from '../store/selectors/layout.selectors';

@Component({
  selector: 'fts-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  openMenu = false;
  layout$: Observable<LayoutState> = this.store.select(selectLayout);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(checkLayout());
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

  openProfile(): void {}
}
