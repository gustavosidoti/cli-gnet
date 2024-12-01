import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosRoutingModule } from './elementos-routing.module';
import { ElementosComponent } from './elementos.component';
import { AgregarElementosComponent } from './agregar-elementos/agregar-elementos.component';
import { ListarElementosComponent } from './listar-elementos/listar-elementos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorElementosComponent } from './buscador-elementos/buscador-elementos.component';
import { TablaElementosComponent } from './tabla-elementos/tabla-elementos.component';


@NgModule({
  declarations: [
    ElementosComponent,
    AgregarElementosComponent,
    ListarElementosComponent,
    BuscadorElementosComponent,
    TablaElementosComponent
  ],
  imports: [
    CommonModule,
    ElementosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ElementosModule { }
