import { createSelector } from '@ngrx/store';
import { layoutFeature, LayoutState } from '../reducers/layout.reducer';

export const selectLayout = createSelector(
  layoutFeature.selectLayoutState,
  (state: LayoutState) => state
);
