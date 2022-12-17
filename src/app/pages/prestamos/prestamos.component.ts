import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/models/prestamos.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
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
  public cargando: boolean = true;

  constructor(private prestamosService: PrestamosService,
              private busquedasService: BusquedasService
            ) { }

  ngOnInit(): void {
    
     this.cargarPrestamos();
    
  }

  cargarPrestamos () {
    this.cargando = true;
    this.prestamosService.cargarPrestamos( this.desde )
         .subscribe( ({total, prestamos}) => {
          this.totalPrestamos = total;
          this.prestamos = prestamos;
          this.cargando = false;
          
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

  buscar( termino: string){

    this.busquedasService.buscar( 'prestamos', termino)
       .subscribe( resultados => {
         this.prestamos = resultados
       })

  }

  

}
