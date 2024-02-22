import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { AgregarPrestamoComponent } from './agregar-prestamo/agregar-prestamo.component';
import { EditarPrestamoComponent } from './editar-prestamo/editar-prestamo.component';
import { EliminarPrestamoComponent } from './eliminar-prestamo/eliminar-prestamo.component';
import { ListarPrestamosComponent } from './listar-prestamos/listar-prestamos.component';
import { PrestamosComponent } from './prestamos.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';


@NgModule({
  declarations: [
    PrestamosComponent,
    AgregarPrestamoComponent,
    EditarPrestamoComponent,
    EliminarPrestamoComponent,
    ListarPrestamosComponent,
    DevolucionesComponent,
    
   
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
  ]
})
export class PrestamosModule { }
