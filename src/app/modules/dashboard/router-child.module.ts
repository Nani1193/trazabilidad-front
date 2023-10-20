import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from '../cliente/components/cliente/cliente.component';
import { ProductosComponent } from '../productos/components/productos/productos.component';
import { LineaPedidoComponent } from '../lineaPedido/components/linea-pedido/linea-pedido.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: ClienteComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', component: LineaPedidoComponent },
  { path: 'lineaPedido', component: LineaPedidoComponent },

]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: []
})
export class RouterChildModule { }
