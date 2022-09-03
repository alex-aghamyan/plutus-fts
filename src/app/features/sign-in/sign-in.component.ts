import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { authActions, pageHeaderActions } from '@fts-store/actions';
import { selectIsMobile } from '@fts-store/features';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  isMobileLayout$: Observable<boolean> = this.store.select(selectIsMobile);
  userAgreementControl = new FormControl<boolean>(false);

  constructor(private store: Store, private modal: NzModalService) {}

  ngOnInit(): void {
    this.store.dispatch(pageHeaderActions.setPageTitle({ pageTitle: '' }));
    this.openWarningDialog();
  }

  openWarningDialog(): void {
    this.modal
      .warning({
        nzTitle: 'Usage Warning',
        nzContent: `This app is for demonstration only.
                    Be aware that the personal information you provide during usage,
                    will be stored in the database, and administration will have full access to it.
                    Please do not use personal data, and if you do,
                    be aware that you do it at your own risk.`,
        nzCancelText: `I don't agree`,
        nzOkText: 'I agree',
        nzClosable: false,
        nzCentered: true,
        nzOnOk: () => true,
      })
      .afterClose.subscribe((hasUserAgreed: boolean) => {
        this.userAgreementControl.setValue(hasUserAgreed);
      });
  }

  signIn(): void {
    this.store.dispatch(authActions.signInAttempt());
  }
}
