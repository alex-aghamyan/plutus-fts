import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FooterAction } from '../../../models/footer-actions.model';

@Component({
  selector: 'fts-footer-actions',
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
