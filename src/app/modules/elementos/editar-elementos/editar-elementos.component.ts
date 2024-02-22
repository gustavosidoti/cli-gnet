import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-editar-elementos',
  templateUrl: './editar-elementos.component.html',
  styleUrls: ['./editar-elementos.component.css']
})
export class EditarElementosComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);
  }

}
