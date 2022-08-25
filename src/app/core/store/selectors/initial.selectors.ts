import { createSelector } from '@ngrx/store';
import { selectUser } from '@fts-store/reducers';
import { selectLayoutState } from '@fts-store/reducers';
import { selectPageHeaderState } from '@fts-store/reducers';

export const selectInitialViewModel = createSelector(
  selectLayoutState,
  selectUser,
  selectPageHeaderState,
  (layout, user, pageHeader) => ({ layout, user, pageHeader })
);
