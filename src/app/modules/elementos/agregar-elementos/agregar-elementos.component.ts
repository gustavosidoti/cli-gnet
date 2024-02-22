import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-agregar-elementos',
  templateUrl: './agregar-elementos.component.html',
  styleUrls: ['./agregar-elementos.component.css']
})
export class AgregarElementosComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);
  }

}
