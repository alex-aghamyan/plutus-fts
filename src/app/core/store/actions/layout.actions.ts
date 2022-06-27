import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const layoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Check Layout': emptyProps(),
    'Set Layout As Mobile': props<{ isMobile: boolean }>(),
  },
});
