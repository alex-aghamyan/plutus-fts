import { createSelector } from '@ngrx/store';
import { authFeature } from '@fts-store/auth';
import { layoutFeature } from '@fts-store/layout';

export const selectInitialViewModel = createSelector(
  layoutFeature.selectLayoutState,
  authFeature.selectUser,
  (layout, user) => ({ layout, user })
);
