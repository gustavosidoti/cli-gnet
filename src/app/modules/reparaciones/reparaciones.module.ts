import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparacionesRoutingModule } from './reparaciones-routing.module';
import { EditarReparacionesComponent } from './editar-reparaciones/editar-reparaciones.component';
import { AgregarReparacionesComponent } from './agregar-reparaciones/agregar-reparaciones.component';
import { ListarReparacionesComponent } from './listar-reparaciones/listar-reparaciones.component';
import { ReparacionesComponent } from './reparaciones.component';
import { ReparacionesFinalizadasComponent } from './reparaciones-finalizadas/reparaciones-finalizadas.component';


@NgModule({
  declarations: [
    EditarReparacionesComponent,
    AgregarReparacionesComponent,
    ListarReparacionesComponent,
    ReparacionesComponent,
    ReparacionesFinalizadasComponent
  ],
  imports: [
    CommonModule,
    ReparacionesRoutingModule
  ]
})
export class ReparacionesModule { }
