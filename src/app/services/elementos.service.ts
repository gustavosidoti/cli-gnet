import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


// colocamos la ruta de los environments
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

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

    agregarElemento(data:any){
    const url = `${ base_url }/carreras`;
    
    return this.http.post( url, data ,this.headers );
    }

    listarElementos(desde: number = 0, criterio:string = ''){

      
      const url = `${ base_url }/carreras?desde=${desde}&criterio=${criterio}`;
      
      return this.http.get( url, this.headers );    
    }

    

    editarElemento(data:any){

      console.log(data);
      const url = `${ base_url }/carreras/${data.id}`;
    
      return this.http.put( url, data ,this.headers );
    }

    eliminarElemento(data:any){

      console.log(data);
      const url = `${ base_url }/carreras/delete?id=${data}`;
    
      return this.http.delete( url, this.headers );
    }
}