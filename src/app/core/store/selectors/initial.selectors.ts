import { createSelector } from '@ngrx/store';
import { selectUser } from '@fts-store/features';
import { selectLayoutState } from '@fts-store/features';
import { selectPageHeaderState } from '@fts-store/features';

export const selectInitialViewModel = createSelector(
  selectLayoutState,
  selectUser,
  selectPageHeaderState,
  (layout, user, pageHeader) => ({ layout, user, pageHeader })
);
