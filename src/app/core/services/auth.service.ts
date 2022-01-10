import { Injectable } from '@angular/core';
import { Auth, authState, signInWithPopup } from '@angular/fire/auth';
import {
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  getUser(): Observable<any> {
    return authState(this.auth).pipe(
      switchMap((user) => {
        if (!user) {
          return EMPTY;
        }

        return docData(doc(this.firestore, `users/${user?.uid}`));
      })
    );
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(this.auth, provider);
    await this.setUser(response.user);
  }

  async setUser(user: User) {
    const userRef: DocumentReference = doc(
      this.firestore,
      `users/${user.uid || ''}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    await setDoc(userRef, userData, { merge: true });
  }
}
