import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-editar-carreras',
  templateUrl: './editar-carreras.component.html',
  styleUrls: ['./editar-carreras.component.css']
})
export class EditarCarrerasComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
  }

}
