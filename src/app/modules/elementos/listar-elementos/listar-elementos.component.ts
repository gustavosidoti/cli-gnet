import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-listar-elementos',
  templateUrl: './listar-elementos.component.html',
  styleUrls: ['./listar-elementos.component.css']
})
export class ListarElementosComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);
  }

}
