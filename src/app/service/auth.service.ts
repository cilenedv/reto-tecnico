import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  //  nuevo https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // login https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  // AIzaSyB-DGM5wYEalXWuBUQsiqZcMq_Op04hJN4
  private url ='https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyB-DGM5wYEalXWuBUQsiqZcMq_Op04hJN4'
  login( usuario: UsuarioModel ) {
    const authData = {
        email: usuario.email,
        password: usuario.password,
        returnSecureToken: true
    };
    return this.http.post(
        `${ this.url }/accounts:signInWithPassword?key=${this.apikey}`,
        authData
    );
  }
}
