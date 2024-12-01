import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-buscador-personas',
  templateUrl: './buscador-personas.component.html',
})
export class BuscadorPersonasComponent {
  opcionSeleccionada: string = 'opcion1';
  criterioBusquedaP: string = '';

  @Output() buscar = new EventEmitter<string>();
  @Output() busquedaPorCarre = new EventEmitter<any>();

  public totalPersonas: number = 0;
  personas:any[] = [];
  carreras:any[] = [];

  constructor(
    public pageActive: PagesActiveService,
    public personaService: PersonasService,
    public carreraService: CarrerasService,
    public router: Router) { }

    ngOnInit(): void {

      this.pageActive.paginaActiva(9);
      this.listarTodasCarreras();
    }

        // METODO QUE BUSCA TRAE TODAS LAS CARRERAS
        listarTodasCarreras(){

          this.carreraService.listarTodasCarreras().subscribe((resp:any) =>{
          this.carreras = resp.carreras;
        })

       }

      // FUNCION QUE FILTRA POR CARRERA Y DEVUELVE AL PADRE LA CARRERA SELECCIONADA
      onCarreraChange(carrera: string) {

        this.busquedaPorCarre.emit(carrera);

      }

      // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA

      buscarPersonas(term: string):void {

        console.log(term);
        //this.listarPersonas(0,term);
        this.buscar.emit(term);
      }








}


