import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'fts-sider-user-info',
  templateUrl: './sider-user-info.component.html',
  styleUrls: ['./sider-user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderUserInfoComponent {
  @Input()
  user!: IUser;
}
