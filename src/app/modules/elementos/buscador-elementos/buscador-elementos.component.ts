import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';


@Component({
  selector: 'app-buscador-elementos',
  templateUrl: './buscador-elementos.component.html',

})
export class BuscadorElementosComponent implements OnInit {

  @Output() buscarElemento = new EventEmitter<string>();


  constructor(public pageActive: PagesActiveService,

              ) { }


  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);

  }

  buscarElementos(term: string):void {


    this.buscarElemento.emit(term);
  }

  // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA




}
