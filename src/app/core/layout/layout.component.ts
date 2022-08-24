import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterAction } from '../models/footer-actions.model';
import { IInitialViewModel } from '../models/initial-view-model.model';
import { appActions } from '../store/actions/app.actions';
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
