import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/models/prestamos.model';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit {

  public totalPrestamos: number = 0;
  public prestamos: Prestamos[] = [];
  public desde: number = 0;


  constructor(public prestamosService: PrestamosService,
              public pageActive: PagesActiveService) { }

  ngOnInit(): void {
    this.cargarPrestamos();
    this.pageActive.paginaActiva(1);
    console.log(this.pageActive.pageActive);
  }

  cargarPrestamos () {
    this.prestamosService.cargarPrestamos( this.desde )
         .subscribe( ({total, prestamos}) => {
          this.totalPrestamos = total;
          this.prestamos = prestamos;
          
          
         })
  }

  cambiarPagina( valor: number){
    this.desde += valor;

    if ( this.desde < 0) {
      this.desde = 0;
    } else if ( this.desde >= this.totalPrestamos ) {
      this.desde -= valor;
    }
      this.cargarPrestamos();
  }

}
