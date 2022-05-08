import { createSelector } from '@ngrx/store';
import { authFeature } from '../reducers/auth.reducer';

export const userViewModel = createSelector(
  authFeature.selectUser,
  (user) => { user }
);
