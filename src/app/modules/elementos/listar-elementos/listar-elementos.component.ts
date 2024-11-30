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

  // conexion api
  public totalelementos: number = 0;
  elementos:any[] = [];
  elemento:any;

  // paginacion
  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;
  mostrar: boolean = true;
  totalElementos:any;

  // formulario
  nElemento:any='';
  idElemento:any;


  // para busquedas
  criterioBusquedaP:any='';
  opcionSeleccionada: string = '';



  constructor(public pageActive: PagesActiveService,
              public elementoService: ElementosService,
              public router: Router) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);

  }



  registrarElemento(){
    let data = {
     nombre: this.nElemento,
     idElemento: this.idElemento,
    }
    this.elementoService.agregarElemento(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      this.nElemento = '';
      this.idElemento = '';
      this.mostrarBtnSiguientes = true;
      this.desde = 0;
      this.elementos = [];
      // Trae nuevamente los elementos
      //this.listarElementos(0);
      // Refrezca la tabla
      this.listarPersonas(0);
      //window.location.reload()
    })

  }

  listarPersonas( desde:any, criterio:any = ""){

    this.elementoService.listarElementos(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.elementos = resp.elementos;
      this.totalElementos = resp.cantidadElementos;

      // ESTABLECE VALORES A ESTAS VARIABLES PARA INICIALIZAR
      this.nElemento = '';
      this.idElemento = '';
      this.mostrar = false;
      }, 500);

    })

  }

  async eliminar( id:any){
    await this.FormeditarElemento('', id, '');
    Swal.fire({
      title: "Quieres eliminar esta Persona?",
      text: "Al eliminar, no podrás reestablecer este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then( async(result) => {
      if (result.isConfirmed) {

         await this.elementoService.eliminarElemento(this.idElemento).subscribe((resp:any) =>{
          Swal.fire({
            title: "Elemento eliminado!",
            text: "El elemento se ha eliminado con éxito.",
            icon: "success"
          });
           // Refrezca el listado
       this.listarPersonas(0,this.criterioBusquedaP);

       this.desde = 0;
       this.mostrarBtnSiguientes = true;
         })

      }
    });

  }
  // COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
  FormeditarElemento(nombre:any, id:any, dniPersona:any){

    this.nElemento = nombre;
    this.idElemento = id;


    this.listarElementos(0)
/*
    this.elementoService.listarElementoById(this.idPersona).subscribe((resp:any) =>{
      this.persona = resp.persona;
      this.carrerasSeleccionadas = this.persona.carrera.map((item:any) => item._id);
    })
    */

  }

  /*
  editarPersona(){
    let data = {
      id: this.idPersona,
      nombre: this.nPersona,
      dni: this.dniPersona,
      carrera: this.carrerasSeleccionadas
     }

    this.personaService.editarPersona(data).subscribe((resp:any) =>{
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      // Navegar al Dashboard
       this.listarPersonas(0,this.criterioBusquedaP);


    })

  }
  */

  // FUNCION PARA BUSCAR PERSONAS Y MOSTRAR RESULTADOS EN TABLA

  buscarPersonas(term: string):void {

    console.log(term);
    this.listarPersonas(0,term);

  }
 /*
  // FUNCION PARA PAGINAR LA TABLA
  cambiarPagina( valor: number){

    this.desde += valor;
    this.mostrarBtnSiguientes = true;

    if ( this.desde < 0) {
      this.desde = 0;
    } else if ( this.desde >= this.totalPersonas ) {
      this.desde -= valor;
      this.mostrarBtnSiguientes = false;
    }

    if(this.desde + 1 == this.totalPersonas) {
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 2 == this.totalPersonas){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 3 == this.totalPersonas){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 4 == this.totalPersonas){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 5 == this.totalPersonas){
      this.mostrarBtnSiguientes = false;
    }

    this.listarPersonas(this.desde, this.criterioBusquedaP);
  }*/

  // FUNCION QUE CARGA EL LISTADO DE CARRERAS PARA LOS FORMULARIOS EDITAR Y NUEVA PERSONA
  listarElementos( desde:any, criterio:any = ""){

    this.elementoService.listarElementos(desde,criterio).subscribe((resp:any) =>{

    this.elementos = resp.elementos;


  })

}
// FUNCION QUE RESETEA EL FORMULARIO AL CANCELARLO
cancelarFormulario(){
   this.nElemento = "";
   this.idElemento = "";
   //this.carrerasSeleccionadas = [];
   this.elementos = [];

   this.listarElementos(0);
}

/*busquedaPorCarrera( nombreCarrera? : any){

  console.log(nombreCarrera);

  this.personaService.listarPersonasPorCarrera(0,nombreCarrera).subscribe((resp:any) => {
    this.personas = resp.personas
    console.log("llegó al final" + resp)
  })

}*/



}
