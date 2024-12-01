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
  @Input() totalPersonas:number;
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
 cambiarPagina(valor: number): void {
  // Cambiar página
  const nuevaPagina = this.desde + valor;


  console.log('paso por acá');
  // Evitar que se pase de los límites
  if (nuevaPagina < 0 || nuevaPagina >= Math.ceil(this.totalPersonas / 5)) {
      return;
  }

  this.desde = nuevaPagina;

  // Actualizar la lista de personas
  this.listarPersonas(this.desde * 5, this.criterioBusquedaP);
}


listarPersonas(desde: number, criterio: string = ""): void {
this.mostrar = true; // Mostrar indicador de carga (opcional)

this.personaService.listarPersonas(desde, criterio).subscribe((resp: any) => {
    this.personas = resp.personas;
    this.totalPersonas = resp.cantidadPersonas;

    // Actualizar el estado de los botones
    this.mostrarBtnSiguientes = (this.desde + 1) * 5 < this.totalPersonas;
    this.mostrarBtnAnteriores = this.desde > 0;

    console.log(desde);

    this.mostrar = false; // Ocultar indicador de carga
});
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
