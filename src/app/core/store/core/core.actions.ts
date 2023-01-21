import { createActionGroup, emptyProps } from '@ngrx/store';

export const coreActions = createActionGroup({
  source: 'App',
  events: {
    'Load App': emptyProps(),
  },
});
