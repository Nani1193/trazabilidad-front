import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaPedidoComponent } from './components/linea-pedido/linea-pedido.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LineaPedidoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LineaPedidoModule { }
