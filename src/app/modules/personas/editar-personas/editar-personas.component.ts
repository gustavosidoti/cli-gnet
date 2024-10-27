import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {


  @Input() persona: any;


  carreras:any[] = [];
  carrerasSeleccionadas:any[] = [];


  nPersona:any;
  idPersona:any;
  dniPersona:any;

  criterioBusquedaP:any='';



  constructor(public pageActive: PagesActiveService,
              public personaService: PersonasService,
              public carreraService: CarrerasService,
              ) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(9);
    this.dniPersona = this.persona?.dni || '';
    this.nPersona = this.persona?.nombre || '';
    this.idPersona = this.persona?._id || '';
  }


      // FUNCION QUE CARGA EL LISTADO DE CARRERAS PARA LOS FORMULARIOS EDITAR Y NUEVA PERSONA
      listarCarreras( desde:any, criterio:any = ""){

            this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{

            this.carreras = resp.carreras;
        })
      }



      // COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
      FormeditarPersona(){

          //this.nPersona = this.nombre;

          //this.dniPersona = this.dniPersona;

          this.listarCarreras(0)

            this.personaService.listarPersonaById(this.idPersona).subscribe((resp:any) =>{
            this.persona = resp.persona;
            this.dniPersona = this.persona.dni;
            this.nPersona = this.persona.nombre;
            console.log(this.persona);
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
        //  this.listarPersonas(0,this.criterioBusquedaP);


    })

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

          // FUNCION QUE RESETEA EL FORMULARIO AL CANCELARLO
          cancelarFormulario(){
            this.nPersona = "";
            this.dniPersona = "";
            this.carrerasSeleccionadas = [];
            this.carreras = [];

            this.listarCarreras(0);
          }

}
