import { createAction, props } from '@ngrx/store';

export const checkLayout = createAction('[Layout] Check Layout');

export const setLayoutIsMobile = createAction(
  '[Layout] Set Layout',
  props<{ isMobile: boolean }>()
);
