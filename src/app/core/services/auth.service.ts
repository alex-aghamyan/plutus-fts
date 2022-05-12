import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  user,
  User,
} from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  private mapRawUserData(rawUserData: User): IUser {
    return {
      uid: rawUserData.uid,
      email: rawUserData.email,
      displayName: rawUserData.displayName,
      photoURL: rawUserData.photoURL,
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
}
