import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
