import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


// colocamos la ruta de los environments
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ReparacionesService {

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

    agregarReparacion(data:any){
    const url = `${ base_url }/reparaciones`;

    return this.http.post( url, data ,this.headers );
    }

    listarReparaciones(desde: number = 0, criterio:string = ''){

      const url = `${ base_url }/reparaciones?desde=${desde}&criterio=${criterio}`;

      return this.http.get( url, this.headers );
    }



    editarReparacion(data:any){

      const url = `${ base_url }/reparaciones/${data.id}`;

      return this.http.put( url, data ,this.headers );
    }

    buscarReparacionPorElemento(desde: number = 0, criterio:string = ''){

      const url = `${ base_url }/reparaciones/buscarPorElemento?desde=${desde}&criterio=${criterio}`;

      return this.http.get( url,this.headers );
    }

    buscarReparacionPorEstado(desde: number = 0, estadoRep:string = ''){

      const url = `${ base_url }/reparaciones/buscarPorEstado?desde=${desde}&estadorep=${estadoRep}`;

      return this.http.get( url,this.headers );
    }

    buscarReparacionPorFechas(desde: number = 0, fechaDesde:Date, fechaHasta:Date){

      const url = `${ base_url }/reparaciones/buscarPorFechas?desde=${desde}&fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`;

      return this.http.get( url,this.headers );
    }

}
