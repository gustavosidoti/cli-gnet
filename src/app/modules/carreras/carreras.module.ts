import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import { ListarCarrerasComponent } from './listar-carreras/listar-carreras.component';
import { EditarCarrerasComponent } from './editar-carreras/editar-carreras.component';
import { AgregarCarrerasComponent } from './agregar-carreras/agregar-carreras.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrerasComponent,
    ListarCarrerasComponent,
    EditarCarrerasComponent,
    AgregarCarrerasComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CarrerasModule { }
