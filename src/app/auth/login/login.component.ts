import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor() {
    this.getScreenSize();
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
    console.log(this.usuario);
    console.log(form)
  }

}
