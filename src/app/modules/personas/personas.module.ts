import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { BuscadorPersonasComponent } from './buscador-personas/buscador-personas.component';
import { AgregarPersonasComponent } from './agregar-personas/agregar-personas.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';


@NgModule({
  declarations: [
    PersonasComponent,
    AgregarPersonasComponent,
    ListarPersonasComponent,
    BuscadorPersonasComponent,
    TablaPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PersonasModule { }
