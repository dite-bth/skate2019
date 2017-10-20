import { Injectable } from '@angular/core';
import {SkateProvider} from "../skate/skate";
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  users: any;

  constructor(public skate: SkateProvider) {
    this.skate.getUsers((users) => {
      this.users = users;
    });
  }

  signInWithEmailAndPassword(email, password, admin) {
    const sessionTime = 7200;  // 2 Hours (Seconds)
    const date = Math.floor(new Date().getTime()/1000) + sessionTime;

    return new Promise((resolve, reject) => {
      if(admin === 'true') {
        sessionStorage.setItem('currentUser', JSON.stringify({email: email, expire: date, admin: true}));
        resolve();
      }else {
        sessionStorage.setItem('currentUser', JSON.stringify({email: email, expire: date, admin: false}));
        resolve();
      }
      //const msg = this.validateForm(email, password);
      //if(msg) {reject(msg)};
      /*
       Hash?
       */
      /*
      this.users.map(function(user) {
        if(email === user.email && password == user.password) {
          sessionStorage.setItem('currentUser', JSON.stringify({email: email, expire: date}));
          if(user.admin) {
            resolve(true);
          }
          resolve(false);
        };
      });
      */
      reject('User does not exist.');
    })
  };

  signOut() {
    return new Promise((resolve, reject) => {
      if(sessionStorage.getItem('currentUser')) {
        sessionStorage.removeItem('currentUser');
        resolve('Signed out.');
      }else {
        reject('User not signed in.');
      }
    })
  };

  validateForm(email, password) {
    if(email.indexOf('@') === -1) {return('Not an email address.')};
    if(email.length === 0) {return('Email field can not be empty.')};
    if(password.length === 0) {return('Password field can not be empty.')};
  }

  expired() {
    return new Promise((resolve, reject) => {
      if(sessionStorage.getItem('currentUser')) {
        const date = JSON.parse(sessionStorage.getItem('currentUser')).expire;
        if(date < Math.floor(new Date().getTime()/1000)) {
          sessionStorage.removeItem('currentUser');
          reject('Session expired.');
        }
        resolve();
      }
    });
  };

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  };

}
