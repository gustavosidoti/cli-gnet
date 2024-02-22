import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-reparaciones-finalizadas',
  templateUrl: './reparaciones-finalizadas.component.html',
  styleUrls: ['./reparaciones-finalizadas.component.css']
})
export class ReparacionesFinalizadasComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(6);
  }

}
