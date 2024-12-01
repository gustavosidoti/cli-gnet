import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';

@Component({
  selector: 'app-listar-elementos',
  templateUrl: './listar-elementos.component.html',
  styleUrls: ['./listar-elementos.component.css']
})
export class ListarElementosComponent implements OnInit {

  public totalElementos: number = 0;
  elementos:any = [];
  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;


  constructor(public pageActive: PagesActiveService,
              public elementosService: ElementosService,
              public router: Router) { }

  mostrar: boolean = true;

  // Formularios de Elementos
  descripcion:string='';
  idElemento:any;
  nroElemento:any;
  marca:string;
  modelo:string;
  estado:boolean;

  // buscador
  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);
    this.listarElementos(0)
  }

  listarElementos( desde:any, criterio:any = ""){

    this.elementosService.listarElementos(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.elementos = resp.elementos;
      //this.totalElementos = resp.cant;
      console.log(resp);
      this.mostrar = false;
      }, 500);

    })

  }



 formeditarElemento(ElementoRecibido:any){
   this.idElemento = ElementoRecibido.id;
   this.descripcion = ElementoRecibido.descripcion;
   this.nroElemento = ElementoRecibido.nro;
   this.marca = ElementoRecibido.marca;
   this.modelo = ElementoRecibido.modelo;
  }

  editarElemento(){
    let data = {
      id: this.idElemento,
      descripcion : this.descripcion,
      nro : this.nroElemento,
      marca : this.marca,
      modelo : this.modelo,
      estado : true
    }

    this.elementosService.editarElemento(data).subscribe((resp:any) =>{
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      // Navegar al Dashboard
       this.listarElementos(0,this.criterioBusqueda);

       this.descripcion = '';
      this.nroElemento = '';
      this.marca = '';
      this.modelo = '';
    })
  }



  // FUNCION PARA BUSCAR PERSONAS Y MOSTRAR RESULTADOS EN TABLA

  buscarElementos(term: any):void {

    this.listarElementos(0,term);

  }

  // Método que recibe la persona agregada desde el hijo y refrezca la tabla
  agregarElemento(nuevaCarrera:{ nCarrera: any, idCarrera: any })
  {

    this.listarElementos(0,"");
  }

  elementoEliminado(_id:any){
    this.listarElementos(0,"");
  }



}
