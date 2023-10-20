import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductosComponent } from './components/new-productos/new-productos.component';

@NgModule({
  declarations: [
    ProductosComponent,
    NewProductosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
