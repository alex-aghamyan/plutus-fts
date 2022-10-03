import { UploadTask } from '@angular/fire/storage';

export interface IUploadProcess {
  task: UploadTask;
  getUploadedFileURL: () => Promise<string>;
}
