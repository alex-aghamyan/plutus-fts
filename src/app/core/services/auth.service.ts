import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  user,
  User,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import { filter, from, map, Observable, switchMap } from 'rxjs';
import { IUser } from '@fts-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  private mapRawUserData(rawUserData: User): IUser {
    return {
      uid: rawUserData.uid,
      email: rawUserData.email ?? '',
      displayName: rawUserData.displayName ?? 'no name',
      photoURL: rawUserData.photoURL ?? '',
    };
  }

  getSignedInUser(): Observable<IUser | null> {
    return user(this.auth).pipe(
      map((user) => {
        if (!user) {
          return null;
        }

        return this.mapRawUserData(user);
      })
    );
  }

  signInWithGoogle(): Observable<IUser> {
    const provider = new GoogleAuthProvider();

    return from(signInWithPopup(this.auth, provider)).pipe(
      map((userCredential) => this.mapRawUserData(userCredential.user))
    );
  }

  signOut(): Observable<void> {
    return from(signOut(this.auth));
  }

  updateProfile(displayName?: string, photoURL?: string): Observable<IUser> {
    return user(this.auth).pipe(
      filter((currentUser): currentUser is User => !!currentUser),
      switchMap((currentUser) => {
        return from(updateProfile(currentUser, { displayName, photoURL }));
      }),
      switchMap(() =>
        this.getSignedInUser().pipe(
          filter((currentUser): currentUser is IUser => !!currentUser)
        )
      )
    );
  }
}
