import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserViewModel } from '../../core/store/selectors/auth.selectors';

@Component({
  selector: 'fts-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  user$ = this.store.select(selectUserViewModel);

  constructor(private store: Store) {}
}
