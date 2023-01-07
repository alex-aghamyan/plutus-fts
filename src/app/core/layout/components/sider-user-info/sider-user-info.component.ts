import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'fts-sider-user-info',
  standalone: true,
  imports: [RouterModule, NzAvatarModule],
  templateUrl: './sider-user-info.component.html',
  styleUrls: ['./sider-user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderUserInfoComponent {
  @Input()
  user!: IUser;
}
