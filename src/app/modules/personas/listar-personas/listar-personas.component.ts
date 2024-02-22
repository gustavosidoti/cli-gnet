import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(9);
  }

}
