import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { take } from 'rxjs';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'fts-welcome',
  standalone: true,
  imports: [CommonModule, SettingsComponent, NzModalModule],
  template: `
    <ng-template #modal>
      <fts-settings></fts-settings>
    </ng-template>
  `,
})
export default class WelcomeComponent implements AfterViewInit {
  @ViewChild('modal')
  modalTemplate!: TemplateRef<Record<string, unknown>>;

  constructor(private modal: NzModalService, private router: Router) {}

  ngAfterViewInit(): void {
    this.modal
      .create({
        nzTitle: 'Please set your preferred settings',
        nzContent: this.modalTemplate,
        nzClosable: false,
        nzCancelDisabled: true,
        nzKeyboard: false,
        nzMaskClosable: false,
        nzCancelText: null,
        nzOkText: 'Confirm',
        nzCentered: true,
        nzAutofocus: null,
        nzOnOk: () => true,
      })
      .afterClose.pipe(take(1))
      .subscribe(() => void this.router.navigateByUrl('/dashboard'));
  }
}
