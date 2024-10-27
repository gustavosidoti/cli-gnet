import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css']
})
export class AgregarPersonasComponent implements OnInit {

  @Input() mostrar: boolean = true;

  @Output() personaAgregada = new EventEmitter<{ nombre: string, dni: any, carrera: any }>();

  carreras:any[] = [];
  carrerasSeleccionadas:any[] = [];

  dniPersona:any='';
  nPersona:any='';

  constructor(public pageActive: PagesActiveService,
              public personaService: PersonasService,
              public carreraService: CarrerasService,
              ) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(9);
    this.listarCarreras(0,"");
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

      this.carrerasSeleccionadas = [];
      this.carreras = [];
      // Emite al Padre (listar personas)
      this.personaAgregada.emit(resp.personaDB);

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

// FUNCION QUE CARGA EL LISTADO DE CARRERAS PARA LOS FORMULARIOS EDITAR Y NUEVA PERSONA
listarCarreras( desde:any, criterio:any = ""){

  this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{

  this.carreras = resp.carreras;


})

}



}
