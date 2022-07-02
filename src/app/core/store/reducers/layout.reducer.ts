import { createFeature, createReducer, on } from '@ngrx/store';
import { layoutActions } from '../actions/layout.actions';

export interface LayoutState {
  isMobile: boolean;
}

export const initialState: LayoutState = {
  isMobile: false,
};

export const layoutFeature = createFeature({
  name: 'layout',
  reducer: createReducer(
    initialState,
    on(
      layoutActions.setIsMobileLayout,
      (state, action): LayoutState => ({
        ...state,
        isMobile: action.isMobile,
      })
    )
  ),
});
