import { createActionGroup, props } from '@ngrx/store';

export const layoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Set Layout As Mobile': props<{ isMobile: boolean }>(),
  },
});
