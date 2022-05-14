import { createSelector } from '@ngrx/store';
import { authFeature } from '../reducers/auth.reducer';

export const selectUserViewModel = createSelector(
  authFeature.selectUser,
  (user) => (user)
);
