import { IPageHeaderState } from './page-header.feature';
import { createActionGroup, props } from '@ngrx/store';

export const pageHeaderActions = createActionGroup({
  source: 'Page Header',
  events: {
    'Set page header': props<IPageHeaderState>(),
    'Set page title': props<{ pageTitle: string }>(),
    'Set page subtitle': props<{ pageSubtitle: string }>(),
  },
});
