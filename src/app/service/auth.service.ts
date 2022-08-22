import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserLoginModel } from '../models/userLogin.model';
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private url = 'https://identitytoolkit.googleapis.com/v1';
    private apikey = 'AIzaSyB-DGM5wYEalXWuBUQsiqZcMq_Op04hJN4';
    userToken: string;
    public loginGoogle: any = {};

    constructor(private http: HttpClient,
                private router: Router,
                public afAuth: AngularFireAuth){

                }


    login(usuario: UserLoginModel) {
        const authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true,
        };
        return this.http
            .post(
                `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
                authData
            )
            .pipe(
                map((resp) => {
                    this.guardarToken(resp['idToken']);
                    return resp;
                })
            );
    }

    logout() {
        localStorage.removeItem('token');
    }

    private guardarToken(idToken: string) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
    }

    leerToken() {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        } else {
            this.userToken = '';
        }
        return this.userToken;
    }

    estaAutentificado(): boolean {
        return this.userToken?.length > 2;
    }

    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new GoogleAuthProvider());


    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
                console.log('You have been successfully logged in!');
                console.log(result);
                this.router.navigate(['/users']);
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

