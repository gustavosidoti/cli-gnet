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

  public totalCarreras: number = 0;
  carreras:any = [];
  public desde: number = 0;



  constructor(public pageActive: PagesActiveService,
              public carreraService: CarrerasService,
              public router: Router) { }

  mostrar: boolean = true;
  nCarrera:any='';
  idCarrera:any;
  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
    this.listarCarreras(0)
  }


  listarCarreras( desde:any, criterio:any = ""){

    this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.carreras = resp.carreras;
      this.totalCarreras = resp.cantidad;

      this.mostrar = false;
      }, 500);

    })

  }

  buscarCarreras(term: string):void {

    this.listarCarreras(0,term);
    this.buscarCarrera.emit(term);
  }

  // FUNCION PARA FILTRAR POR TECLADO Y DEVUELVE AL PADRE EL CRITERIO DE BUSQUEDA




}
