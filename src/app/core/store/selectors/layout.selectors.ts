import { createSelector } from '@ngrx/store';
import { layoutFeature, LayoutState } from '@fts-store/reducers';

export const selectLayout = createSelector(
  layoutFeature.selectLayoutState,
  (state: LayoutState) => state
);
