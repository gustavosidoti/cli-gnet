import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
})
export class TablaPersonasComponent {
  @Input() personas: any[] = []; // Asegúrate de definir el tipo correcto
  @Input() totalPersonas: number = 0;
  @Input() mostrar: boolean = false;

  // output para que se edite un usuario seleccionado
  @Output() editarPersona = new EventEmitter<string>();
  // tabla
  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;
  criterioBusquedaP:any='';

  // de formulario editar
  persona:any;
  nPersona:any='';
  idPersona:any;
  dniPersona:any='';

  // carreras
  carreras:any = [];
  carrerasSeleccionadas:any[] = [];

  constructor(public pageActive: PagesActiveService,
    public personaService: PersonasService,
    public carreraService: CarrerasService,
    public router: Router) { }

ngOnInit(): void {

this.pageActive.paginaActiva(9);


}
  // Otros métodos como cambiarPagina, eliminar, etc.

 // FUNCION PARA PAGINAR LA TABLA
 cambiarPagina( valor: number){
  console.log(valor);
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
}


listarPersonas( desde:any, criterio:any = ""){

  this.personaService.listarPersonas(desde,criterio).subscribe((resp:any) =>{

    this.personas = resp.personas;
    this.totalPersonas = resp.cantidadPersonas;

    // ESTABLECE VALORES A ESTAS VARIABLES PARA INICIALIZAR

    this.mostrar = false;


  })

}

// FUNCION QUE CARGA EL LISTADO DE CARRERAS PARA LOS FORMULARIOS EDITAR Y NUEVA PERSONA
listarCarreras( desde:any, criterio:any = ""){

  this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{

  this.carreras = resp.carreras;


})

}

// COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
 FormeditarPersona(id:string){

  this.editarPersona.emit(id);


}

// Funcion eliminar
async eliminar( id:any){

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

        await this.personaService.eliminarPersona(this.idPersona).subscribe((resp:any) =>{
         Swal.fire({
           title: "Persona Eliminada!",
           text: "La Persona se ha eliminado con éxito.",
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










}
