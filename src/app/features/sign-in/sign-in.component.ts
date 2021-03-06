import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { authActions } from 'src/app/core/store/actions/auth.actions';
import { LayoutState } from 'src/app/core/store/reducers/layout.reducer';
import { selectLayout } from 'src/app/core/store/selectors/layout.selectors';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SignInComponent implements OnInit {
  layout$: Observable<LayoutState> = this.store.select(selectLayout);
  userAgreementControl!: FormControl;

  constructor(private store: Store, private modal: NzModalService) {}

  ngOnInit(): void {
    this.initUserAgreementControl();
    this.openWarningDialog();
  }

  initUserAgreementControl(): void {
    this.userAgreementControl = new FormControl(false);
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
      .afterClose.subscribe((hasUserAgreed) => {
        this.userAgreementControl.setValue(hasUserAgreed);
      });
  }

  signIn(): void {
    this.store.dispatch(authActions.signInAttempt());
  }
}
