import { Component, NgModule, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReparacionesFinalizadasService } from '../../../services/reparacionesFinalizadas.service';
import Swal from 'sweetalert2';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-reparaciones-finalizadas',
  templateUrl: './reparaciones-finalizadas.component.html',
  styleUrls: ['./reparaciones-finalizadas.component.css']
})
export class ReparacionesFinalizadasComponent implements OnInit {

  mostrarM: boolean = true;

  reparaciones: [] = []

  // Formularios de Reparaciones
  idReparacion:any;
  nroReparacion:any
  descripcionReparacion:string;
  observacionReparacion:any;
  estadoReparacion:any;
  EstadosRep: string[] = ["En proceso","Esperando repuesto","Finalizada"]

  // buscador
  criterioBusqueda:any='';


  constructor(public pageActive: PagesActiveService,
              public reparacionesFinalizadasService: ReparacionesFinalizadasService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(6);
    this.listarReparacionesFinalizadas(0)
  }

  btnExportarReparaciones(){}




  listarReparacionesFinalizadas( desde:any, criterio:any = ""){

    this.reparacionesFinalizadasService.listarReparacionesFinalizadas(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.reparaciones = resp.reparaciones;
      //this.totalElementos = resp.cant;
      console.log(resp);
      this.mostrarM = false;
      }, 500);

    })

  }



 formeditarReparacion(ReparacionRecibida:any){
   this.idReparacion =ReparacionRecibida.id;
   this.nroReparacion = ReparacionRecibida.reparacionNro;
   this.descripcionReparacion = ReparacionRecibida.descripcion;
   this.estadoReparacion = ReparacionRecibida.estadoRep;
   this.observacionReparacion = ReparacionRecibida.observaciones;

  }

  editarReparacion(){



    let data = {
      idReparacion: this.idReparacion,
      estadoRep : "En proceso"
    }

    this.reparacionesFinalizadasService.editarReparacionFinalizada(data).subscribe((resp:any) =>{
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      // Navegar al Dashboard
       this.listarReparacionesFinalizadas(0,this.criterioBusqueda);


    })
  }



  // FUNCION PARA BUSCAR PERSONAS Y MOSTRAR RESULTADOS EN TABLA

  buscarReparacionesPorElemento(elem: any):void {

    this.reparacionesFinalizadasService.buscarReparacionPorElemento(0,elem).subscribe((resp:any) =>{
      this.reparaciones = resp.reparaciones;
   })


  }

  buscarReparacionesPorNumero(nroRep:string){

    this.listarReparacionesFinalizadas(0,nroRep);
  }

  buscarReparacionesPorFechas(Fechas:{fechaDesde:Date, fechaHasta:Date}){
    this.reparacionesFinalizadasService.buscarReparacionPorFechas(0,Fechas.fechaDesde, Fechas.fechaHasta).subscribe((resp:any) => {
      this.reparaciones = resp.reparaciones
      console.log(resp.reparaciones);
    })
  }




}


