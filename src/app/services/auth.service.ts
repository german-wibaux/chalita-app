import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    private userDetails: any = null;

    constructor(
        public afAuth: AngularFireAuth
    ) {         

     }

    signInRegular(email: string, password: string) {
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
        this.afAuth.signOut()
        .then((_res: any) => window.location.href = '/');
    }

}