import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// colocamos la ruta de los environments
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

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

    agregarPersona(data:any){
    const url = `${ base_url }/Personas`;
    
    return this.http.post( url, data ,this.headers );
    }

    listarPersonas(desde: number = 0, criterio:string = ''){

      
      const url = `${ base_url }/Personas?desde=${desde}&criterio=${criterio}`;
      
      return this.http.get( url, this.headers );    
    }

    listarPersonasPorCarrera(desde: number = 0, carrera:string = ''){

      let data = {
        desde: desde,
        id_carrera: carrera

      }
      
      const url = `${ base_url }/Personas/personacarrera`;
      
      return this.http.post( url, data , this.headers );    
    }

    listarPersonaById(id:any){
     
      const url = `${ base_url }/Personas/${id}`;
      
      return this.http.get( url, this.headers );    
    }

    

    editarPersona(data:any){

      console.log(data);
      const url = `${ base_url }/Personas/${data.id}`;
    
      return this.http.put( url, data ,this.headers );
    }

    eliminarPersona(data:any){

      console.log(data);
      const url = `${ base_url }/Personas/delete?id=${data}`;
    
      return this.http.delete( url, this.headers );
    }
}