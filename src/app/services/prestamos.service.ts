import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


 // colocamos la ruta de los environments
 const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

 

  constructor(private http: HttpClient) { }

  cargarPrestamos(desde: number = 0){
    const url = `${ base_url }/prestamos?desde=${ desde }`;

  }


}
