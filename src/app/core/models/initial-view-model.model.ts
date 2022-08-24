import { IPageHeaderState } from '@fts-store/reducers';
import { ILayoutState } from '../store/reducers/layout.reducer';
import { IUser } from './user.model';

export interface IInitialViewModel {
  layout: ILayoutState;
  user: IUser | null;
  pageHeader: IPageHeaderState;
}
