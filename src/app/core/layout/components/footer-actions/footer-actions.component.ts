import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FooterAction } from '../../../models/footer-actions.model';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'fts-footer-actions',
  standalone: true,
  imports: [NzButtonModule, NzAvatarModule, NzIconModule],
  templateUrl: './footer-actions.component.html',
  styleUrls: ['./footer-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterActionsComponent {
  @Input()
  userPhotoURL = '';

  @Output()
  footerAction = new EventEmitter<FooterAction>();

  emitAction(action: FooterAction): void {
    this.footerAction.emit(action);
  }
}
