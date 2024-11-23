import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import { ListarCarrerasComponent } from './listar-carreras/listar-carreras.component';
import { EditarCarrerasComponent } from './editar-carreras/editar-carreras.component';
import { AgregarCarrerasComponent } from './agregar-carreras/agregar-carreras.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuscadorCarrerasComponent } from './buscador-carreras/buscador-carreras.component';


@NgModule({
  declarations: [
    CarrerasComponent,
    ListarCarrerasComponent,
    EditarCarrerasComponent,
    AgregarCarrerasComponent,
    BuscadorCarrerasComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CarrerasModule { }
