import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IPageHeaderState } from '@fts-store/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'fts-page-header',
  standalone: true,
  imports: [CommonModule, NzPageHeaderModule, NzIconModule, NzButtonModule],
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
