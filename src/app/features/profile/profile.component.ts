import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '@fts-store/features';
import { authActions, pageHeaderActions } from '@fts-store/actions';
import { FileUploadService } from '@fts-services';
import { IUploadProcess } from '@fts-models';

@Component({
  selector: 'fts-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FileUploadService],
})
export class ProfileComponent implements OnInit {
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

  editUserDisplayName(displayName: string) {
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
      complete: async () => {
        const photoURL = await uploadProcess.getUploadedFileURL();
        this.store.dispatch(authActions.profileUpdateAttempt({ photoURL }));
        this.showPhotoUploadingProgress = false;
      },
    });
  }

  signOut() {
    this.store.dispatch(authActions.signOutAttempt());
  }
}
