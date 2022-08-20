import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'gp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router,
               private userService: UsersService) {
                // this.salir()
                }


  ngOnInit(): void {
    this.userService.getUsers()
        .subscribe( users => {
            console.log(users);
        })
  }
    // 900000 15minutos
//   salir(){
//     setTimeout(() => {
//         this.auth.logout();
//         this.router.navigate(['/login']);
//     }, 5000 );
//   }




}
