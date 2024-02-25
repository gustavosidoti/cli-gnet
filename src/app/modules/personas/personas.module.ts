import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasComponent } from './personas.component';
import { AgregarPersonasComponent } from './agregar-personas/agregar-personas.component';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonasComponent,
    AgregarPersonasComponent,
    ListarPersonasComponent,
    EditarPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PersonasModule { }
