import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparacionesRoutingModule } from './reparaciones-routing.module';
import { AgregarReparacionesComponent } from './agregar-reparaciones/agregar-reparaciones.component';
import { ListarReparacionesComponent } from './listar-reparaciones/listar-reparaciones.component';
import { ReparacionesComponent } from './reparaciones.component';
import { ReparacionesFinalizadasComponent } from './reparaciones-finalizadas/reparaciones-finalizadas.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaReparacionesComponent } from './tabla-reparaciones/tabla-reparaciones-componet';
import { BuscadorReparacionesComponent } from './buscador-reparaciones/buscador-reparaciones.component';
import { BuscadorReparacionesFinalizadasComponent } from './buscador-reparaciones-finalizadas/buscador-reparaciones-finalizadas.component';
import { TablaReparacionesFinalizadasComponent } from './tabla-reparaciones-finalizadas/tabla-reparaciones-finalizadas.component';



@NgModule({
  declarations: [
    AgregarReparacionesComponent,
    ListarReparacionesComponent,
    ReparacionesComponent,
    ReparacionesFinalizadasComponent,
    BuscadorReparacionesFinalizadasComponent,
    TablaReparacionesComponent,
    TablaReparacionesFinalizadasComponent,
    BuscadorReparacionesComponent

  ],
  imports: [
    CommonModule,
    ReparacionesRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } // Cambiar el idioma si es necesario
  ],
})
export class ReparacionesModule { }
