import { createSelector } from '@ngrx/store';
import { authFeature } from '@fts-store/reducers';

export const selectUserViewModel = createSelector(
  authFeature.selectUser,
  (user) => (user)
);
