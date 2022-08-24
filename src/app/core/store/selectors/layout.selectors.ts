import { createSelector } from '@ngrx/store';
import { layoutFeature, ILayoutState } from '@fts-store/reducers';

export const selectLayout = createSelector(
  layoutFeature.selectLayoutState,
  (state: ILayoutState) => state
);
