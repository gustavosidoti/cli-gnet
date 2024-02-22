import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children:[
      {
        path:'agregar-usuario',
        component:AgregarUsuariosComponent
      },
      {
        path:'listar-usuario',
        component:ListarUsuariosComponent
      },
      {
        path:'editar-usuario',
        component:EditarUsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
