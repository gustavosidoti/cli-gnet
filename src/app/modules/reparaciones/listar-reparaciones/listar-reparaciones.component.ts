import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-listar-reparaciones',
  templateUrl: './listar-reparaciones.component.html',
  styleUrls: ['./listar-reparaciones.component.css']
})
export class ListarReparacionesComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(4);
  }

}
