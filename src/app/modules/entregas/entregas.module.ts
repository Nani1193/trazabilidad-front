import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregasComponent } from './components/entregas/entregas.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntregasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntregasModule { }
