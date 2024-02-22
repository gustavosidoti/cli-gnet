import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-agregar-reparaciones',
  templateUrl: './agregar-reparaciones.component.html',
  styleUrls: ['./agregar-reparaciones.component.css']
})
export class AgregarReparacionesComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(5);
  }

}
