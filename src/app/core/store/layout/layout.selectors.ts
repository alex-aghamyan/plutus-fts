import { createSelector } from '@ngrx/store';
import { selectUser } from '@fts-store/auth';
import { selectLayoutState } from '@fts-store/layout';

export const selectInitialViewModel = createSelector(
  selectLayoutState,
  selectUser,
  (layout, user) => ({ layout, user })
);
