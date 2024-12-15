import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { ReparacionesFinalizadasService } from 'src/app/services/reparacionesFinalizadas.service';

@Component({
  selector: 'app-tabla-reparaciones-finalizadas',
  templateUrl: './tabla-reparaciones-finalizadas.component.html',

})
export class TablaReparacionesFinalizadasComponent implements OnInit {

  @Input() reparaciones: any[] = []; // Asegúrate de definir el tipo correcto
  @Input() totalReparaciones: number = 0;
  @Input() mostrar: boolean = false;

  // output para que se edite una carrera seleccionada
  @Output() editarReparacion = new EventEmitter<any>();



  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;


  constructor(public pageActive: PagesActiveService,
              public reparacionesFinalizadasService: ReparacionesFinalizadasService,
              public router: Router) { }



  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(6);
    this.listarReparaciones(0)
  }


  cambiarPagina(valor: number): void {
    // Cambiar página
    const nuevaPagina = this.desde + valor;

    // Evitar que se pase de los límites
    if (nuevaPagina < 0 || nuevaPagina >= Math.ceil(this.totalReparaciones / 5)) {
        return;
    }

    this.desde = nuevaPagina;

    // Actualizar la lista de elementos
    this.listarReparaciones(this.desde * 5, this.criterioBusqueda);
}


listarReparaciones(desde: number, criterio: string = ""): void {
  this.mostrar = true; // Mostrar indicador de carga (opcional)

  this.reparacionesFinalizadasService.listarReparacionesFinalizadas(desde, criterio).subscribe((resp: any) => {
      this.reparaciones = resp.reparaciones;
      this.totalReparaciones = resp.cantidad;

      // Actualizar el estado de los botones
      this.mostrarBtnSiguientes = (this.desde + 1) * 5 < this.totalReparaciones;
      this.mostrarBtnAnteriores = this.desde > 0;

      this.mostrar = false; // Ocultar indicador de carga
  });
}

  // COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
 FormeditarReparacionAca(id:any, descripcion:any, reparacionNro:any, estadoRep:any, observaciones:any){


  this.editarReparacion.emit({id,descripcion,reparacionNro,estadoRep,observaciones});


}


}
