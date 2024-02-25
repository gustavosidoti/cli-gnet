import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-carreras',
  templateUrl: './listar-carreras.component.html',
  styleUrls: ['./listar-carreras.component.css']
})
export class ListarCarrerasComponent implements OnInit {

  public totalCarreras: number = 0;
  carreras:any = [];
  public desde: number = 0;
  mostrarBtnSiguientes: boolean = true;
  mostrarBtnAnteriores: boolean = false;


  constructor(public pageActive: PagesActiveService,
              public carreraService: CarrerasService,
              public router: Router) { }

  mostrar: boolean = true;
  nCarrera:any='';
  idCarrera:any;
  criterioBusqueda:any='';

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
    this.listarCarreras(0)
  }


  cambiarPagina( valor: number){

    this.desde += valor;
    this.mostrarBtnSiguientes = true;

    if ( this.desde < 0) {
      this.desde = 0;
    } else if ( this.desde >= this.totalCarreras ) {
      this.desde -= valor;
      this.mostrarBtnSiguientes = false;
    }

    if(this.desde + 1 == this.totalCarreras) {
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 2 == this.totalCarreras){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 3 == this.totalCarreras){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 4 == this.totalCarreras){
      this.mostrarBtnSiguientes = false;
    }
    if(this.desde + 5 == this.totalCarreras){
      this.mostrarBtnSiguientes = false;
    }
    
    this.listarCarreras(this.desde, this.criterioBusqueda); 
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
      this.mostrarBtnSiguientes = true;
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

  async eliminar( id:any){
    await this.FormeditarCarrera('', id);
    Swal.fire({
      title: "Quieres eliminar esta carrera?",
      text: "Al eliminar, no podrás reestablecer este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then( async(result) => {
      if (result.isConfirmed) {
       
         await this.carreraService.eliminarCarrera(this.idCarrera).subscribe((resp:any) =>{
          Swal.fire({
            title: "Carrera Eliminada!",
            text: "La carrera se ha eliminado con éxito.",
            icon: "success"
          });
           // Refrezca el listado
       this.listarCarreras(0,this.criterioBusqueda);
       this.nCarrera = '';
       this.desde = 0;
       this.mostrarBtnSiguientes = true;
         })
        
      }
    });

  }

  FormeditarCarrera(nombre:any, id:any){
    this.nCarrera = nombre;
    this.idCarrera = id;
  }

  editarCarrera(){
    let data = {
      id : this.idCarrera,
      nombreCarrera : this.nCarrera
    }
    
    this.carreraService.editarCarrera(data).subscribe((resp:any) =>{
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');
      
      // Navegar al Dashboard
       this.listarCarreras(0,this.criterioBusqueda);

       this.nCarrera = '';
    })    
  }

  buscarCarreras(term: string):void {

    this.listarCarreras(0,term);

  }


}


