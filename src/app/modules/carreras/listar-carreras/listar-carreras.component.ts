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

  constructor(public pageActive: PagesActiveService,
              public carreraService: CarrerasService,
              public router: Router) { }

  mostrar: boolean = true;
  nCarrera:any='';
  idCarrera:any;

  ngOnInit(): void {

    this.pageActive.paginaActiva(7);
    this.listarCarreras()
  }


  cambiarPagina( valor: number){


    this.desde += valor;
    
    if ( this.desde < 0) {
      this.desde = 0;
    } else if ( this.desde >= this.totalCarreras ) {
      this.desde -= valor;
    }
      
  }

  registrarCarrera(){
    let data = {
     nombreCarrera: this.nCarrera
    }

    console.log(data)
    
    this.carreraService.agregarCarrera(data).subscribe( (resp:any) => {
      // Alerta de bienvenida
      Swal.fire('Success', resp.msg, 'success');
      
      // Navegar al Dashboard
      this.listarCarreras();

      this.nCarrera = '';
    })
    
  }

  listarCarreras(){
    this.carreraService.listarCarreras().subscribe((resp:any) =>{
      setTimeout(() => {
      this.carreras = resp.carreras;
      this.mostrar = false;
      }, 1000);
        
    })
  }

  async eliminar( id:any){
    await this.FormeditarCarrera('', id);
    Swal.fire({
      title: "Quieres eliminar esta carrera?",
      text: "Al aceptar, no podrás reestablecer este cambio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async(result) => {
      if (result.isConfirmed) {
       
         await this.carreraService.eliminarCarrera(this.idCarrera).subscribe((resp:any) =>{
          Swal.fire({
            title: "Carrera Eliminada!",
            text: "La carrera se ha eliminado con éxito.",
            icon: "success"
          });
           // Refrezca el listado
       this.listarCarreras();
       this.nCarrera = '';
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
       this.listarCarreras();

       this.nCarrera = '';
    })    
  }


}


