import { createSelector } from '@ngrx/store';
import { pageHeaderFeature } from '@fts-store/reducers';

export const selectPageHeader = createSelector(
  pageHeaderFeature.selectPageHeaderState,
  (pageHeader) => pageHeader
);
