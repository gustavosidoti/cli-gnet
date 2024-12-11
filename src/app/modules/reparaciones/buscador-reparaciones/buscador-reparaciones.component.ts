import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PersonasService } from 'src/app/services/personas.service';
import { ElementosService } from '../../../services/elementos.service';
import { ReparacionesService } from '../../../services/reparaciones.service';

@Component({
  selector: 'app-buscador-reparaciones',
  templateUrl: './buscador-reparaciones.component.html',
})
export class BuscadorReparacionesComponent {
  opcionSeleccionada: string = 'opcion1';
  criterioBusquedaP: string = '';

  @Output() buscarPorNroReparacion = new EventEmitter<string>();
  @Output() busquedaPorElemento = new EventEmitter<any>();
  @Output() busquedaPorEstado = new EventEmitter<string>();

  public totalPersonas: number = 0;
  personas:any[] = [];
  elementos:any[] = [];

  constructor(
    public pageActive: PagesActiveService,
    public reparacionesService: ReparacionesService,
    public elementosService:ElementosService,
    public router: Router) { }

    ngOnInit(): void {

      this.pageActive.paginaActiva(4);
      this.listarTodosElementos();
    }

        // METODO QUE BUSCA TRAE TODAS LAS CARRERAS
        listarTodosElementos(){

          this.elementosService.listarTodosElementos().subscribe((resp:any) =>{
          this.elementos = resp.elementos;
        })

       }

      // FUNCION QUE FILTRA POR CARRERA Y DEVUELVE AL PADRE LA CARRERA SELECCIONADA
      onElementoChange(elemento: string) {

        this.busquedaPorElemento.emit(elemento);

      }

      onEstadoRepChange(estado:string){
        this.busquedaPorEstado.emit(estado);
      }

      // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA

      buscarPorNro(term: string):void {
        //this.listarPersonas(0,term);
        this.buscarPorNroReparacion.emit(term);
      }








}
