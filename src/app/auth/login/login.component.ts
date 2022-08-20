import { Component, OnInit } from '@angular/core';
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
  constructor() { }


  ngOnInit(): void {
  }

  login( form: NgForm ) {
    if ( form.invalid ) {
        return;
    }
    console.log(this.usuario);
    console.log(form)
  }

}
