import { Component, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';

@Component({
  selector: 'app-agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css']
})
export class AgregarPersonasComponent implements OnInit {

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(9);
  }

}
