import { IPageHeaderState } from '@fts-store/features';
import { ILayoutState } from '../store/features/layout.feature';
import { IUser } from './user.model';

export interface IInitialViewModel {
  layout: ILayoutState;
  user: IUser | null;
  pageHeader: IPageHeaderState;
}
