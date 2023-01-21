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
      (state, action): ILayoutState => ({
        ...state,
        isMobile: action.isMobile,
      })
    ),
    on(
      layoutActions.setPageHeader,
      (state, action): ILayoutState => ({
        ...state,
        pageHeader: {
          pageTitle: action.pageTitle,
          pageSubtitle: action.pageSubtitle,
        },
      })
    ),
    on(
      layoutActions.setPageTitle,
      (state, action): ILayoutState => ({
        ...state,
        pageHeader: {
          ...state.pageHeader,
          pageTitle: action.pageTitle,
        },
      })
    ),
    on(
      layoutActions.setPageSubtitle,
      (state, action): ILayoutState => ({
        ...state,
        pageHeader: {
          ...state.pageHeader,
          pageSubtitle: action.pageSubtitle,
        },
      })
    )
  ),
});
