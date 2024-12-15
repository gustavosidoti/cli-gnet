import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PagesActiveService } from 'src/app/services/pages-active.service';


@Component({
  selector: 'app-buscador-reparaciones-finalizadas',
  templateUrl: './buscador-reparaciones-finalizadas.component.html',
})
export class BuscadorReparacionesFinalizadasComponent {
  opcionSeleccionada: string = 'opcion1';
  criterioBusquedaP: string = '';

  @Output() buscarPorNroReparacion = new EventEmitter<string>();
  @Output() busquedaPorElemento = new EventEmitter<any>();
  @Output() busquedaPorEstado = new EventEmitter<string>();
  @Output() busquedaPorFechas = new EventEmitter();

  public totalPersonas: number = 0;
  personas:any[] = [];
  elementos:any[] = [];
  fechaDesde:Date;
  fechaHasta:Date;

  constructor(
    public pageActive: PagesActiveService,
    public router: Router) { }

    ngOnInit(): void {

      this.pageActive.paginaActiva(6);

    }

      // FUNCION QUE FILTRA POR NRO Y DEVUELVE AL PADRE LA REPARACION SELECCIONADA
      onNroChange(elemento: string) {

        this.busquedaPorElemento.emit(elemento);

      }

      // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA

      buscarPorNro(term: string):void {
        //this.listarPersonas(0,term);
        this.buscarPorNroReparacion.emit(term);
      }

      buscarPorfecha(){
        this.busquedaPorFechas.emit({fechaDesde: this.fechaDesde, fechaHasta:this.fechaHasta})
      }


}
