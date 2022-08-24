import { IPageHeaderState } from '@fts-store/reducers';
import { LayoutState } from '../store/reducers/layout.reducer';
import { IUser } from './user.model';

export interface IInitialViewModel {
  layout: LayoutState;
  user: IUser | null;
  pageHeader: IPageHeaderState;
}
