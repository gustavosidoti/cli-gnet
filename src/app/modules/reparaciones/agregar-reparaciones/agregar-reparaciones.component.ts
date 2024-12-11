import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';
import { ReparacionesService } from '../../../services/reparaciones.service';
import { Router } from '@angular/router';
import { ElementosService } from '../../../services/elementos.service';

@Component({
  selector: 'app-agregar-reparaciones',
  templateUrl: './agregar-reparaciones.component.html',
  styleUrls: ['./agregar-reparaciones.component.css']
})
export class AgregarReparacionesComponent implements OnInit {

  // Select de Elementos
  elementos:any = [];
  id_elemento:any;

  // Datos de Reparaciones

  descripcionReparacion:any='';
  elemento:any='';
  observaciones:string='';



  constructor(public pageActive: PagesActiveService,
              public reparacionesService: ReparacionesService,
              public elementosService:ElementosService,
              public router: Router) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(5);
    this.listarTodosElementos();
  }


  registrarReparacion(){
    let data = {
     descripcionReparacion: this.descripcionReparacion,
     elemento: this.elemento,
     observaciones: this.observaciones,
    }

    console.log(data);

    this.reparacionesService.agregarReparacion(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');


      // formatear los campos del formulario
      this.descripcionReparacion = '';
      this.observaciones = '';
      this.elemento = '';

      // redirección a listar reparaciones
      this.router.navigateByUrl('/reparaciones/listar-reparaciones');

    })

  }

  listarTodosElementos(){
    this.elementosService.listarTodosElementos().subscribe((resp:any)=>{
      this.elementos = resp.elementos;
    })
  }

}
