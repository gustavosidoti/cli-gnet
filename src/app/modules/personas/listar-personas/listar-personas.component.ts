import { Component, OnInit } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  public totalPersonas: number = 0;
  personas:any[] = [];
  carreras:any[] = [];
  carrerasSeleccionadas:any[] = [];
  persona:any;
  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;
  mostrar: boolean = true;
  nPersona:any='';
  idPersona:any;
  criterioBusquedaP:any='';
  dniPersona:any='';

  opcionSeleccionada: string = '';
  
 

  

  constructor(public pageActive: PagesActiveService,
              public personaService: PersonasService,
              public carreraService: CarrerasService,
              public router: Router) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(9);
    this.listarPersonas(0)
    this.listarCarreras(0)
    
    
  }

  checkValue(nombreC: any){
    nombreC.checked = !nombreC.checked; // Cambia el estado del checkbox

    const index = this.carrerasSeleccionadas.indexOf(nombreC._id);

    if (nombreC.checked && index === -1) {
      
      this.carrerasSeleccionadas.push(nombreC._id); // Agrega el elemento seleccionado al arreglo
    } else {
      
      if (index > -1) {
        this.carrerasSeleccionadas.splice(index, 1); // Elimina el elemento deseleccionado del arreglo
      }
    }
    
  }
 

  registrarPersona(){
    let data = {
     nombre: this.nPersona,
     dni: this.dniPersona,
     carrera: this.carrerasSeleccionadas
    }
    this.personaService.agregarPersona(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      this.nPersona = '';
      this.dniPersona = '';
      this.mostrarBtnSiguientes = true;
      this.desde = 0;
      this.carrerasSeleccionadas = [];
      this.carreras = [];
      // Trae nuevamente las carreras
      this.listarCarreras(0);
      // Refrezca la tabla
      this.listarPersonas(0);
      //window.location.reload()
    })
    
  }

  listarPersonas( desde:any, criterio:any = ""){
    
    this.personaService.listarPersonas(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.personas = resp.personas;
      this.totalPersonas = resp.cantidadPersonas;

      // ESTABLECE VALORES A ESTAS VARIABLES PARA INICIALIZAR
      this.nPersona = '';
      this.dniPersona = '';
      this.mostrar = false;
      }, 500);
        
    })

  }

  async eliminar( id:any){
    await this.FormeditarPersona('', id, '');
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
  // COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
  FormeditarPersona(nombre:any, id:any, dniPersona:any){
    console.log(this.carrerasSeleccionadas);
    this.nPersona = nombre;
    this.idPersona = id;
    this.dniPersona = dniPersona;

    this.listarCarreras(0)

    this.personaService.listarPersonaById(this.idPersona).subscribe((resp:any) =>{
      this.persona = resp.persona;
      this.carrerasSeleccionadas = this.persona.carrera.map((item:any) => item._id);
    })
    
  }

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
  
  // FUNCION PARA BUSCAR PERSONAS Y MOSTRAR RESULTADOS EN TABLA 

  buscarPersonas(term: string):void {

    console.log(term);
    this.listarPersonas(0,term);
  
  }

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
  }

  // FUNCION QUE CARGA EL LISTADO DE CARRERAS PARA LOS FORMULARIOS EDITAR Y NUEVA PERSONA
  listarCarreras( desde:any, criterio:any = ""){
    
    this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{
    
    this.carreras = resp.carreras;
    
      
  })
 
}
// FUNCION QUE RESETEA EL FORMULARIO AL CANCELARLO
cancelarFormulario(){
   this.nPersona = "";
   this.dniPersona = "";
   this.carrerasSeleccionadas = [];
   this.carreras = [];

   this.listarCarreras(0);
}

busquedaPorCarrera( nombreCarrera? : any){

  console.log(nombreCarrera);

  this.personaService.listarPersonasPorCarrera(0,nombreCarrera).subscribe((resp:any) => {
    this.personas = resp.personas
    console.log("llegó al final" + resp)
  })
  
}



}
