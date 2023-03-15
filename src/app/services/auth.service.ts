
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


import 'rxjs-compat';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    provider: firebase.auth.GoogleAuthProvider;
    private user: Observable<firebase.User | null | undefined> | undefined;
    private userDetails: firebase.User | undefined;

    // constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    //     this.user = _firebaseAuth.authState;

    //     this.user.subscribe(
    //         (user) => {
    //         if (user) {
    //             this.userDetails = user;
    //             console.log(this.userDetails);
    //         } else {
    //             this.userDetails = null;
    //         }
    //         }
    //     );
    // }

    constructor(
        private afAuth: AngularFireAuth, 
        private router: Router,
        private _firebaseAuth: AngularFireAuth
    ) { 
        this.provider = new firebase.auth.GoogleAuthProvider();
        

     }

    // loginGoogle() {
    //     return this.afAuth.auth.signInWithPopup( this.provider );
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return this.oAuthLogin(provider);
    //     this.afAuth.auth.signInWithPopup(provider).then((result) => {
    //         console.log(result);
    //         return provider;
    //     })
    // }

    // getAuth() {
    //     return this.afAuth.authState.map(auth => auth);
    // }

    // logout() {
    //     return this.afAuth.auth.signOut();
    // }

    signInRegular(email: string, password: string) {
        const credential = firebase.auth.EmailAuthProvider.credential( email, password );
        this.user = this._firebaseAuth.authState;

        this.user?.subscribe(
            (user: firebase.User | undefined | null) => {
            if (user) {
                this.userDetails = user;
                // console.log(this.userDetails);
            } else {
                this.userDetails;
            }
            }
        );
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     }

     isLoggedIn() {
        // this.user = this._firebaseAuth.authState;

        // this.user?.subscribe(
        //     (user: firebase.User | undefined | null) => {
        //     if (user) {
        //         this.userDetails = user;
        //         // console.log(this.userDetails);
        //     } else {
        //         this.userDetails;
        //     }
        //     }
        // );        
        if (this.userDetails == null ) {
            return false;
        } else {
            return true;
        }
    }

    logout() {
        this._firebaseAuth.auth.signOut()
        .then((res) => window.location.href = '/');
    }

}