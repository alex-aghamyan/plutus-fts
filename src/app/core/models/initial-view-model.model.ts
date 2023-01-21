import { ILayoutState } from '@fts-store/layout';
import { IUser } from './user.model';

export interface IInitialViewModel {
  layout: ILayoutState;
  user: IUser | null;
}
