import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IPageHeaderState } from '@fts-store/reducers';

@Component({
  selector: 'fts-page-header',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input()
  pageHeader!: IPageHeaderState;

  @Input()
  isMobileLayout = false;

  @Output()
  addTransaction = new EventEmitter();

  emitAddingTransaction(): void {
    this.addTransaction.emit();
  }
}
