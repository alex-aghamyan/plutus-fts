import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserViewModel } from '@fts-store/selectors';
import { pageHeaderActions } from '@fts-store/actions';

@Component({
  selector: 'fts-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  user$ = this.store.select(selectUserViewModel);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      pageHeaderActions.setPageTitle({ pageTitle: 'Profile' })
    );
  }
}
