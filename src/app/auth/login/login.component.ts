import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioModel } from '../../models/usuario.model';


@Component({
  selector: 'gp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  usuario: UsuarioModel = new UsuarioModel();
  screenWidth: number;
  mostrar: boolean;
  recordar = false;


  constructor( private auth: AuthService,
               public router: Router,
               public authService: AuthService ) {
    this.getScreenSize();
    if( localStorage.getItem('email') ){
        this.usuario.email = localStorage.getItem('email');
        this.recordar = true;
    }else{
        this.recordar = false;
    }
   }


  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
        if(this.screenWidth < 640){
            this.mostrar = true;
        }else{
            this.mostrar = false;
        }
  }

  login( form: NgForm ) {
    if ( form.invalid ) {
        return;
    }
    this.auth.login( this.usuario).subscribe( resp => {
        console.log(resp);
        if( this.recordar ){
            localStorage.setItem('email', this.usuario.email);
        }else{
            localStorage.setItem('email', '');
        }

        this.router.navigate(['/users']);

    }, (err) => {
       console.log(err.error.error.message);
    });
  }

}
