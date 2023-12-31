import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClienteModule } from '../cliente/cliente.module';
import { ProductosModule } from '../productos/productos.module';
import { EntregasModule } from '../entregas/entregas.module';
import { LineaPedidoModule } from '../lineaPedido/linea-pedido.module';
import { PedidosModule } from '../pedidos/pedidos.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ClienteModule,
    ProductosModule,
    EntregasModule,
    LineaPedidoModule,
    PedidosModule

  ]
})
export class DashboardModule { }
