import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPrestamoComponent } from './agregar-prestamo/agregar-prestamo.component';
import { PrestamosComponent } from './prestamos.component';
import { ListarPrestamosComponent } from './listar-prestamos/listar-prestamos.component';
import { EditarPrestamoComponent } from './editar-prestamo/editar-prestamo.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';

const routes: Routes = [{
  path: '',
  component: PrestamosComponent,
  children:[
    {
      path:'agregar-prestamo',
      component:AgregarPrestamoComponent
    },
    {
      path:'listar-prestamos',
      component:ListarPrestamosComponent
    },
    {
      path:'editar-prestamos',
      component:EditarPrestamoComponent
    },
    {
      path:'devoluciones',
      component:DevolucionesComponent
    }
  ],
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
