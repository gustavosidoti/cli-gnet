import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import { CargarPrestamos } from '../interfaces/cargar-prestamos';
import { Prestamos } from '../models/prestamos.model';


 // colocamos la ruta de los environments
 const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  


  constructor(private http: HttpClient,
              private router: Router) { }

  get token(){
    return localStorage.getItem('token') || '';
    
   }
   
   get headers() {
      return {
         headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
            'x-token': this.token
         }
     }
   }

  cargarPrestamos(desde: number = 0){
    const url = `${ base_url }/prestamos?desde=${ desde }`;

    return this.http.get<CargarPrestamos>( url, this.headers );
              
  }


}
