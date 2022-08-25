import { createFeature, createReducer, on } from '@ngrx/store';
import { layoutActions } from '@fts-store/actions';

export interface ILayoutState {
  isMobile: boolean;
}

const initialState: ILayoutState = {
  isMobile: false,
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
    )
  ),
});

export const { selectLayoutState, selectIsMobile } = layoutFeature;
