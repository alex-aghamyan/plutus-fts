import { createFeature, createReducer, on } from '@ngrx/store';
import { IPageHeader } from '@fts-models';
import { layoutActions } from './layout.actions';

export interface ILayoutState {
  isMobile: boolean;
  pageHeader: IPageHeader;
}

const initialState: ILayoutState = {
  isMobile: false,
  pageHeader: {
    pageTitle: '',
    pageSubtitle: '',
  },
};

export const layoutFeature = createFeature({
  name: 'layout',
  reducer: createReducer(
    initialState,
    on(
      layoutActions.setIsMobileLayout,
      (state, { isMobile }): ILayoutState => ({
        ...state,
        isMobile,
      })
    ),
    on(
      layoutActions.setPageHeader,
      (state, { pageTitle, pageSubtitle }): ILayoutState => ({
        ...state,
        pageHeader: {
          pageTitle,
          pageSubtitle,
        },
      })
    ),
    on(
      layoutActions.setPageTitle,
      (state, { pageTitle }): ILayoutState => ({
        ...state,
        pageHeader: {
          ...state.pageHeader,
          pageTitle,
        },
      })
    ),
    on(
      layoutActions.setPageSubtitle,
      (state, { pageSubtitle }): ILayoutState => ({
        ...state,
        pageHeader: {
          ...state.pageHeader,
          pageSubtitle,
        },
      })
    )
  ),
});
