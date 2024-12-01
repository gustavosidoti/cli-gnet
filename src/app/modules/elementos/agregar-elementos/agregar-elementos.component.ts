import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-elementos',
  templateUrl: './agregar-elementos.component.html',
  styleUrls: ['./agregar-elementos.component.css']
})
export class AgregarElementosComponent implements OnInit {

  @Input() mostrar: boolean = true;

  @Output() elementoAgregado = new EventEmitter<any>();

  public totalCarreras: number = 0;
  elementos:any = [];
  public desde: number = 0;

  descripcion:any='';
  nroElemento:any='';
  marca:any='';
  modelo:any='';


  constructor(public pageActive: PagesActiveService,
              public elementoService: ElementosService,
              public router: Router) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);

  }


  registrarElemento(){
    let data = {

     descripcion: this.descripcion,
     nro: this.nroElemento,
     marca: this.marca,
     modelo: this.modelo,
     estado: true
    }
    this.elementoService.agregarElemento(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      this.elementoAgregado.emit(data);

      this.descripcion = '';
      this.marca = '';
      this.nroElemento = '';
      this.modelo = '';

    })

  }





}
