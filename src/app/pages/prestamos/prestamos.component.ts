import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/models/prestamos.model';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  public totalPrestamos: number = 0;
  public prestamos: Prestamos[] = [];
  public desde: number = 0;

  constructor(private prestamosService: PrestamosService) { }

  ngOnInit(): void {
    
     this.cargarPrestamos();
    
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
