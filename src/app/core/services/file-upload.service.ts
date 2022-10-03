import { Injectable } from '@angular/core';
import {
  ref,
  Storage,
  getDownloadURL,
  StorageReference,
  uploadBytesResumable,
  percentage,
} from '@angular/fire/storage';
import { EMPTY, map, Observable } from 'rxjs';
import { IUploadProcess } from '@fts-models';

@Injectable()
export class FileUploadService {
  private _progress$: Observable<number> = EMPTY;
  get progress$(): Observable<number> {
    return this._progress$;
  }

  constructor(private storage: Storage) {}

  upload(file: File, uploadUrl: string): IUploadProcess {
    const formData: FormData = new FormData();
    const storageRef: StorageReference = ref(this.storage, uploadUrl);

    formData.append('file', file, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    this._progress$ = percentage(uploadTask).pipe(
      map((state) => Math.round(state.progress))
    );

    return {
      task: uploadTask,
      getUploadedFileURL: () => getDownloadURL(storageRef),
    };
  }
}
