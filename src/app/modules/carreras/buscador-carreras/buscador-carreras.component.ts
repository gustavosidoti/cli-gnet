import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';


@Component({
  selector: 'app-buscador-carreras',
  templateUrl: './buscador-carreras.component.html',

})
export class BuscadorCarrerasComponent implements OnInit {

  @Output() buscarCarrera = new EventEmitter<string>();


  constructor(public pageActive: PagesActiveService,
              public carreraService: CarrerasService,
              public router: Router) { }


  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);

  }

  buscarCarreras(term: string):void {


    this.buscarCarrera.emit(term);
  }

  // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA




}
