import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosRoutingModule } from './elementos-routing.module';
import { ElementosComponent } from './elementos.component';
import { AgregarElementosComponent } from './agregar-elementos/agregar-elementos.component';
import { EditarElementosComponent } from './editar-elementos/editar-elementos.component';
import { ListarElementosComponent } from './listar-elementos/listar-elementos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ElementosComponent,
    AgregarElementosComponent,
    EditarElementosComponent,
    ListarElementosComponent
  ],
  imports: [
    CommonModule,
    ElementosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ElementosModule { }
