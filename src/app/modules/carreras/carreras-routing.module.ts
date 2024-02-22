import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCarrerasComponent } from './agregar-carreras/agregar-carreras.component';
import { CarrerasComponent } from './carreras.component';
import { EditarCarrerasComponent } from './editar-carreras/editar-carreras.component';
import { ListarCarrerasComponent } from './listar-carreras/listar-carreras.component';

const routes: Routes = [
  {
    path: '',
    component: CarrerasComponent,
    children:[
      {
        path:'agregar-carreras',
        component:AgregarCarrerasComponent
      },
      {
        path:'listar-carreras',
        component:ListarCarrerasComponent
      },
      {
        path:'editar-carreras',
        component:EditarCarrerasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerasRoutingModule { }
