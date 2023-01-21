import { createFeature, createReducer, on } from '@ngrx/store';
import { pageHeaderActions } from './page-header.actions';

export interface IPageHeaderState {
  pageTitle: string;
  pageSubtitle: string;
}

const initialState: IPageHeaderState = {
  pageTitle: '',
  pageSubtitle: '',
};

export const pageHeaderFeature = createFeature({
  name: 'pageHeader',
  reducer: createReducer(
    initialState,
    on(
      pageHeaderActions.setPageHeader,
      (state, action): IPageHeaderState => ({
        ...state,
        pageTitle: action.pageTitle,
        pageSubtitle: action.pageSubtitle,
      })
    ),
    on(
      pageHeaderActions.setPageTitle,
      (state, action): IPageHeaderState => ({
        ...state,
        pageTitle: action.pageTitle,
      })
    ),
    on(
      pageHeaderActions.setPageSubtitle,
      (state, action): IPageHeaderState => ({
        ...state,
        pageTitle: action.pageSubtitle,
      })
    )
  ),
});

export const { selectPageHeaderState, selectPageTitle, selectPageSubtitle } = pageHeaderFeature;
