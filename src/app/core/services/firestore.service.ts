import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  getDoc,
  DocumentData,
  setDoc,
  doc,
  WithFieldValue,
} from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly firestore = inject(Firestore);

  getDoc(path: string): Observable<DocumentData | undefined> {
    const docRef = doc(this.firestore, path);
    return from(getDoc(docRef)).pipe(map((doc) => doc.data()));
  }

  setDoc(path: string, data: WithFieldValue<DocumentData>): Observable<void> {
    const docRef = doc(this.firestore, path);
    return from(setDoc(docRef, data));
  }
}
