import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestamos } from '../models/prestamos.model';
import { PrestamosService } from '../services/prestamos.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    //this.router.navigate(['/prestamos/listar-prestamos']);
  }

}
