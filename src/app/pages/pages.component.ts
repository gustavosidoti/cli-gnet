import { Component, OnInit } from '@angular/core';
import { Prestamos } from '../models/prestamos.model';
import { PrestamosService } from '../services/prestamos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

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
