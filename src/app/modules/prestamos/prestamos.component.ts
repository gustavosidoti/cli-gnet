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
  constructor(private prestamosService: PrestamosService) { }

  ngOnInit(): void {
    this.prestamosService.cargarPrestamos(0)
         .subscribe( ({total, prestamos}) => {
          this.totalPrestamos = total;
          this.prestamos = prestamos;
         })
  }

}
