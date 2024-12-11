import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';
import { ReparacionesService } from '../../../services/reparaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reparaciones',
  templateUrl: './listar-reparaciones.component.html',
  styleUrls: ['./listar-reparaciones.component.css']
})
export class ListarReparacionesComponent implements OnInit {

  @Output() estadoReparaciones = new EventEmitter<any>();

  constructor(public pageActive: PagesActiveService,
              public reparacionesService: ReparacionesService,
              public router: Router) { }

  ngOnInit(): void {
    this.pageActive.paginaActiva(4);
    this.listarReparaciones(0)
  }

  reparaciones: [] = []
  mostrar: boolean = true;

  // Formularios de Reparaciones
  idReparacion:any;
  descripcionReparacion:string='';
  elemento:any;
  estado:string;
  observaciones:string;

  // buscador
  criterioBusqueda:any='';



  listarReparaciones( desde:any, criterio:any = ""){

    this.reparacionesService.listarReparaciones(desde,criterio).subscribe((resp:any) =>{
      setTimeout(() => {
      this.reparaciones = resp.reparaciones;
      //this.totalElementos = resp.cant;
      console.log(resp);
      this.mostrar = false;
      }, 500);

    })

  }



 formeditarReparacion(ReparacionRecibida:any){
   this.elemento = ReparacionRecibida.elemento;
   this.descripcionReparacion = ReparacionRecibida.descripcionReparacion;
   this.estado = ReparacionRecibida.estado;

  }

  editarReparacion(){
    let data = {
      idReparacion: this.idReparacion,
      descripcion : this.descripcionReparacion,
      observaciones : this.observaciones,
      estado : this.estado
    }

    this.reparacionesService.editarReparacion(data).subscribe((resp:any) =>{
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');

      // Navegar al Dashboard
       this.listarReparaciones(0,this.criterioBusqueda);

      this.descripcionReparacion = '';
      this.elemento = '';
      this.estado = '';
      this.observaciones = '';

    })
  }



  // FUNCION PARA BUSCAR PERSONAS Y MOSTRAR RESULTADOS EN TABLA

  buscarReparacionesPorElemento(elem: any):void {

    this.reparacionesService.buscarReparacionPorElemento(0,elem).subscribe((resp:any) =>{
      this.reparaciones = resp.reparaciones;
   })


  }

  buscarReparacionesPorNro(nroRep:string){

    this.listarReparaciones(0,nroRep);
  }

  buscarReparacionesPorEstado(estado:string){
    console.log(estado);
    this.reparacionesService.buscarReparacionPorEstado(0,estado).subscribe((resp:any) => {
      this.reparaciones = resp.reparaciones

    })

  }

  // Método que recibe la persona agregada desde el hijo y refrezca la tabla
  agregarReparacion(nuevaReparacion:{ nCarrera: any, idCarrera: any })
  {

    this.listarReparaciones(0,"");
  }

  btnAgregarReparacion(){
    this.router.navigateByUrl('/reparaciones/agregar-reparaciones');
  }



}
