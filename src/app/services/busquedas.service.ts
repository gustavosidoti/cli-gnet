import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';

// colocamos la ruta de los environments
const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient) { }

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

 buscar (
          tipo: 'prestamos'|'reparaciones'|'elementos'|'carreras',
          termino: string
        ){
    const url = `${ base_url }/todo/coleccion/${ tipo }/${ termino }`;
    return this.http.get<any[]>( url, this.headers )
              .pipe(
                map((resp: any) => resp.resultado)
              );
 }



}
