import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { DeveloperService } from '../developers/developer.service';

@Injectable()
export class AuthService {
    user: firebase.User;
    isLoggedIn = false;
    constructor(private angularFireAuth: AngularFireAuth, private developerService: DeveloperService) {
        this.isAuthenticated().then(user => this.setUp(user));
        this.angularFireAuth.onAuthStateChanged(user => this.setUp(user));
     }

    setUp(user: firebase.User) {
        
        if (user) {
            this.user = user;
            this.isLoggedIn = true;
        } else {
            user = null;
            this.isLoggedIn = false;
        }
    }

    async signUp(email: string, password: string, fullName: string) {
        this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then((data) => {
            this.developerService.addNewDeveloper({fullName, email}, data.user.uid);
        },
        (err) => {
            console.log(err);
        });
        // console.log(this.user);

    }

    login(email: string, password: string) {
        this.angularFireAuth.signInWithEmailAndPassword(email, password).catch(
            (error) => {
                console.log(error);
            }
        );
    }   

    logout() {
        if(this.isLoggedIn){
            this.angularFireAuth.signOut();
        }
    }

    isAuthenticated() {
        return this.angularFireAuth.authState.pipe(first()).toPromise();
     }

}