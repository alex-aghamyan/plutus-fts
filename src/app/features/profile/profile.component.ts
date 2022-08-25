import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@fts-store/features';
import { pageHeaderActions } from '@fts-store/actions';

@Component({
  selector: 'fts-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  user$ = this.store.select(selectUser);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      pageHeaderActions.setPageTitle({ pageTitle: 'Profile' })
    );
  }
}
