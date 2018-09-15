import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { first } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { async } from 'q';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User | null>;
  public AuthState: boolean;

    constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = firebaseAuth.authState;
    }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.AuthState = false;
    this.firebaseAuth
      .auth
      .signOut();
  }

}
