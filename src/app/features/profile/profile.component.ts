import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@fts-store/features';
import { authActions, pageHeaderActions } from '@fts-store/actions';
import { FileUploadService } from '@fts-services';
import { IUploadProcess } from '@fts-models';
import { SettingsComponent } from '../settings/settings.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LetModule, PushModule } from '@ngrx/component';

@Component({
  selector: 'fts-profile',
  standalone: true,
  imports: [
    CommonModule,
    SettingsComponent,
    NzDividerModule,
    NzAvatarModule,
    NzTypographyModule,
    NzButtonModule,
    NzProgressModule,
    NzIconModule,
    LetModule,
    PushModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FileUploadService],
})
export default class ProfileComponent implements OnInit {
  user$ = this.store.select(selectUser);
  showPhotoUploadingProgress = false;

  constructor(
    private store: Store,
    protected fileUploader: FileUploadService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      pageHeaderActions.setPageTitle({ pageTitle: 'Profile' })
    );
  }

  editUserDisplayName(value: string, currentDisplayName: string): void {
    const displayName = value.trim();
    if (displayName === currentDisplayName) return;
    this.store.dispatch(authActions.profileUpdateAttempt({ displayName }));
  }

  changeUserPhoto(event: Event, userId: string): void {
    const target = event.target as HTMLInputElement;
    const fileToUpload: File | null | undefined = target.files?.item(0);

    if (!fileToUpload) return;

    const uploadProcess: IUploadProcess = this.fileUploader.upload(
      fileToUpload,
      `users-photos/${userId}`
    );

    this.showPhotoUploadingProgress = true;

    uploadProcess.task.on('state_changed', {
      next: null,
      error: () => {
        this.store.dispatch(
          authActions.profileUpdateFailure({
            messageToShow: 'Something went wrong!',
          })
        );
      },
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      complete: async () => {
        const photoURL = await uploadProcess.getUploadedFileURL();
        this.store.dispatch(authActions.profileUpdateAttempt({ photoURL }));
        this.showPhotoUploadingProgress = false;
      },
    });
  }

  signOut(): void {
    this.store.dispatch(authActions.signOutAttempt());
  }
}
