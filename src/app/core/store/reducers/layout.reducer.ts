import { createFeature, createReducer, on } from '@ngrx/store';
import { setLayoutIsMobile } from '../actions/layout.actions';

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
    on(setLayoutIsMobile, (state, action) => ({
      ...state,
      isMobile: action.isMobile,
    }))
  ),
});
