import { createActionGroup, emptyProps } from '@ngrx/store';

export const appActions = createActionGroup({
  source: 'App',
  events: {
    'Load App': emptyProps(),
  },
});
