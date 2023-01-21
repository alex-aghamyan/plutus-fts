import { createActionGroup, props } from '@ngrx/store';
import { IPageHeader } from '@fts-models';

export const layoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Set Is Mobile Layout': props<{ isMobile: boolean }>(),
    'Set page header': props<IPageHeader>(),
    'Set page title': props<{ pageTitle: string }>(),
    'Set page subtitle': props<{ pageSubtitle: string }>(),
  },
});
