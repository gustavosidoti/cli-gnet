import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm = this.fb.group({
      email: [ localStorage.getItem('email') ||'', Validators.required],
      password: ['', Validators.required],
      remember: [false]
  });

  constructor( private router: Router,
               private  fb: FormBuilder,
               private usuarioService: UsuarioService ) { }


  login(){

    this.usuarioService.login( this.loginForm.value )
        .subscribe(resp => {
          // funcion del recuerdame guardando en localStorage 
          if (this.loginForm.get('remember')?.value){
             localStorage.setItem('email', this.loginForm.get('email')?.value );
          } else {
             localStorage.removeItem('email');
          } 
            // Navegar al Dashboard
            this.router.navigateByUrl('/')


          }, (err) => {
          // Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });

    //this.router.navigateByUrl('/');
  }

  

}
