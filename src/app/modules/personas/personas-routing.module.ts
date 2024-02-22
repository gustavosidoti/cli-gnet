import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonasComponent } from './agregar-personas/agregar-personas.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { PersonasComponent } from './personas.component';

const routes: Routes = [
  {
    path: '',
    component: PersonasComponent,
    children:[
      {
        path:'agregar-personas',
        component:AgregarPersonasComponent
      },
      {
        path:'listar-personas',
        component:ListarPersonasComponent
      },
      {
        path:'editar-personas',
        component:EditarPersonasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
