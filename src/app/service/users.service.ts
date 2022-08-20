import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  private url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(){
    return this.http.get(this.url).pipe(
        map(( resp: any[]) =>
        resp.map( users =>({nombre: users.name, username: users.username, address:`${ users.address.street } ${ users.address.suite } ${ users.address.city }`, email: users.email, phone: users.phone}))
        )
    );
  }
}
