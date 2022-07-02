import { createActionGroup, props } from '@ngrx/store';

export const layoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Set Is Mobile Layout': props<{ isMobile: boolean }>(),
  },
});
