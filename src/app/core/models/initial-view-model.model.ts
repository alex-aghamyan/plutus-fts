import { IPageHeaderState } from '@fts-store/page-header';
import { ILayoutState } from '@fts-store/layout';
import { IUser } from './user.model';

export interface IInitialViewModel {
  layout: ILayoutState;
  user: IUser | null;
  pageHeader: IPageHeaderState;
}
