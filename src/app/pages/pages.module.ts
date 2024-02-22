import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from '../modules/usuarios/usuarios.component';
import { ListarPrestamosComponent } from '../modules/prestamos/listar-prestamos/listar-prestamos.component';
import { PrestamosModule } from '../modules/prestamos/prestamos.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports:[
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
