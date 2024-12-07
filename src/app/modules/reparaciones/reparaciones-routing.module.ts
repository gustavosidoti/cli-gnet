import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarReparacionesComponent } from './agregar-reparaciones/agregar-reparaciones.component';
import { ListarReparacionesComponent } from './listar-reparaciones/listar-reparaciones.component';
import { ReparacionesFinalizadasComponent } from './reparaciones-finalizadas/reparaciones-finalizadas.component';
import { ReparacionesComponent } from './reparaciones.component';

const routes: Routes = [
  {
    path: '',
    component: ReparacionesComponent,
    children:[
      {
        path:'agregar-reparaciones',
        component:AgregarReparacionesComponent
      },
      {
        path:'listar-reparaciones',
        component:ListarReparacionesComponent
      },
      {
        path:'reparaciones-finalizadas',
        component:ReparacionesFinalizadasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparacionesRoutingModule { }
