import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-elementos',
  templateUrl: './tabla-elementos.component.html',

})
export class TablaElementosComponent implements OnInit {

  @Input() elementos: any[] = []; // Asegúrate de definir el tipo correcto
  @Input() totalElementos: number = 0;
  @Input() mostrar: boolean = false;

  // output para que se edite una carrera seleccionada
  @Output() editarElemento = new EventEmitter<any>();
  @Output() elementoEliminado = new EventEmitter<any>();


  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;


  constructor(public pageActive: PagesActiveService,
              public elementoService: ElementosService,
              public router: Router) { }


  descripcion:any='';
  idCarrera:any;
  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(8);
    this.listarElementos(0)
  }


  cambiarPagina(valor: number): void {
    // Cambiar página
    const nuevaPagina = this.desde + valor;

    // Evitar que se pase de los límites
    if (nuevaPagina < 0 || nuevaPagina >= Math.ceil(this.totalElementos / 5)) {
        return;
    }

    this.desde = nuevaPagina;

    // Actualizar la lista de elementos
    this.listarElementos(this.desde * 5, this.criterioBusqueda);
}


listarElementos(desde: number, criterio: string = ""): void {
  this.mostrar = true; // Mostrar indicador de carga (opcional)

  this.elementoService.listarElementos(desde, criterio).subscribe((resp: any) => {
      this.elementos = resp.elementos;
      this.totalElementos = resp.cantidad;

      // Actualizar el estado de los botones
      this.mostrarBtnSiguientes = (this.desde + 1) * 5 < this.totalElementos;
      this.mostrarBtnAnteriores = this.desde > 0;

      console.log(desde);

      this.mostrar = false; // Ocultar indicador de carga
  });
}

  async eliminar( _id:any){

    Swal.fire({
      title: "Quieres eliminar este Elemento?",
      text: "Al eliminar, no podrás reestablecer este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then( async(result) => {
      if (result.isConfirmed) {

         await this.elementoService.eliminarElemento(_id).subscribe((resp:any) =>{
          Swal.fire({
            title: "Elemento Eliminado!",
            text: "El elemento se ha eliminado con éxito.",
            icon: "success"
          });
           // Refrezca el listado
           this.elementoEliminado.emit(_id);
         })

      }
    });

  }

  // COMPLETA LOS CAMPOS DEL FORMULARIO EDITAR PERSONAS
 FormeditarElementoAca(id:any, descripcion:any, nro:any, marca:any, modelo:any){


  this.editarElemento.emit({id,descripcion,nro,marca,modelo});


}


}
