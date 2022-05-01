import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  layout$: Observable<LayoutState> = this.store.select(selectLayout);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(checkLayout());
  }
}
