import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-carreras',
  templateUrl: './agregar-carreras.component.html',
  styleUrls: ['./agregar-carreras.component.css']
})
export class AgregarCarrerasComponent implements OnInit {

  @Input() mostrar: boolean = true;

  @Output() carreraAgregada = new EventEmitter<{ nCarrera: any, idCarrera: any }>();

  public totalCarreras: number = 0;
  carreras:any = [];
  public desde: number = 0;

  nCarrera:any='';
  idCarrera:any;


  constructor(public pageActive: PagesActiveService,
              public carreraService: CarrerasService,
              public router: Router) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
    this.listarCarreras(0)
  }


  registrarCarrera(){
    let data = {
     nombreCarrera: this.nCarrera
    }
    this.carreraService.agregarCarrera(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      // Navegar al Dashboard
      this.listarCarreras(0);

      this.nCarrera = '';
      this.desde = 0;
    })

  }

  listarCarreras( desde:any, criterio:any = ""){

    this.carreraService.listarCarreras(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.carreras = resp.carreras;
      this.totalCarreras = resp.cantidad;
      this.mostrar = false;
      }, 500);

    })

  }

}
