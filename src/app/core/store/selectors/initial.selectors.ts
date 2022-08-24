import { createSelector } from '@ngrx/store';
import { selectUserViewModel } from './auth.selectors';
import { selectLayout } from './layout.selectors';
import { selectPageHeader } from './page-header.selectors';

export const selectInitialViewModel = createSelector(
  selectLayout,
  selectUserViewModel,
  selectPageHeader,
  (layout, user, pageHeader) => ({ layout, user, pageHeader })
);
