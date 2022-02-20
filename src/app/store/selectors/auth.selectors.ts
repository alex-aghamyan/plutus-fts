import { createSelector } from '@ngrx/store';
import { IUser } from 'src/app/core/models/user.model';
import { authFeature } from '../reducers/auth.reducer';

export const userViewModel = createSelector(
  authFeature.selectUser,
  (user: IUser | null) => user
);
