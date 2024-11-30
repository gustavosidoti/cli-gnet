import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarElementosComponent } from './agregar-elementos/agregar-elementos.component';

import { ElementosComponent } from './elementos.component';
import { ListarElementosComponent } from './listar-elementos/listar-elementos.component';

const routes: Routes = [
  {
    path: '',
    component: ElementosComponent,
    children:[
      {
        path:'agregar-elementos',
        component:AgregarElementosComponent
      },
      {
        path:'listar-elementos',
        component:ListarElementosComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosRoutingModule { }
