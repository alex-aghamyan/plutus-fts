import { createSelector } from '@ngrx/store';
import { selectUserViewModel } from './auth.selectors';
import { selectLayout } from './layout.selectors';

export const selectInitialViewModel = createSelector(
  selectLayout,
  selectUserViewModel,
  (layout, user) => ({ layout, user })
);
