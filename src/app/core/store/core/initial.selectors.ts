import { createSelector } from '@ngrx/store';
import { selectUser } from '@fts-store/auth';
import { selectLayoutState } from '@fts-store/layout';
import { selectPageHeaderState } from '@fts-store/page-header';

export const selectInitialViewModel = createSelector(
  selectLayoutState,
  selectUser,
  selectPageHeaderState,
  (layout, user, pageHeader) => ({ layout, user, pageHeader })
);
