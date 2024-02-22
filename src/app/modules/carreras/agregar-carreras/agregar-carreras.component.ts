import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-agregar-carreras',
  templateUrl: './agregar-carreras.component.html',
  styleUrls: ['./agregar-carreras.component.css']
})
export class AgregarCarrerasComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
  }

}
