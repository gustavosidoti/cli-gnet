import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap, map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Usuario } from '../models/usuario.model';


// colocamos la ruta de los environments
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  public usuario!: Usuario;

  constructor( private http: HttpClient,
               private router: Router,
               
                ) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  get token(){
   return localStorage.getItem('token') || '';
   
  }
  
  get headers() {
     return {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
      'x-token': this.token
    }
  }


  // Verifica el token que recibe el usuario al loguearse
   validarToken(): Observable<boolean> {
    

    return this.http.get(`${base_url}/auth/login/renew`, {
      // aca va los headers
    }).pipe(
      tap( (resp: any) => {

        const {nombre , email, role, status, google, uid } = resp;

        this.usuario = new Usuario( nombre , email, role, status, google, uid);
        console.log(resp.token);
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  }

  crearUsuario ( formData: RegisterForm ) {
    return this.http.post(`${base_url}/usuarios`, formData)
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                 )
  }

  login( formData: LoginForm) {

    return this.http.post(`${base_url}/auth/login`, formData)
               .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token )
                })
               )

  }


}
