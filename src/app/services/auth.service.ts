import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    // provider: firebase.auth.GoogleAuthProvider;
    // private user: Observable<firebase.User | null | undefined> | undefined;
    private userDetails: any = null;

    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
        // private _firebaseAuth: AngularFireAuth
    ) { 
        // this.provider = new firebase.auth.GoogleAuthProvider();
        

     }

    signInRegular(email: string, password: string) {
        // const credential = firebase.auth.EmailAuthProvider.credential( email, password );
        // this.user = this._firebaseAuth.authState;

        // this.user?.subscribe(
        //     (user: firebase.User | undefined | null) => {
        //     if (user) {
        //         this.userDetails = user;
        //     } else {
        //         this.userDetails;
        //     }
        //     }
        // );
        // return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.afAuth.authState.subscribe((user) => {
                    if (user) {
                        this.userDetails = user;
                    }
                });
            })
            .catch((error) => {
                window.alert(error.message);
            });
        }
     

     isLoggedIn() {
        if (this.userDetails !== null)
            return true;
        else
            return false;        
    }

    logout() {
        // this._firebaseAuth.auth.signOut()
        // .then((_res: any) => window.location.href = '/');
    }

}