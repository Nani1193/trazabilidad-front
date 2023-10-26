import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PedidosService } from 'src/app/modules/shared/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedido: any;
  nuevoPedido: any;

  constructor(private pedidosService: PedidosService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obtenerPedidos();
  }

  displayedColumns: string[] = ['id', 'fecha', 'estadoPedido', 'lineasPedido', 'entrega'];
  dataSource = new MatTableDataSource<PedidosElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerPedidos(): void {
    this.pedidosService.obtenerPedidos().subscribe((pedidos:any) => {
      this.processPedidosResponse(pedidos);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearPedido(): void {
    this.pedidosService.crearPedido(this.nuevoPedido).subscribe((pedidos) => {
      this.pedido.push(pedidos);
    });
  }

  processPedidosResponse(data: any[]){
    this.dataSource = new MatTableDataSource<PedidosElement>(data);
    this.dataSource.paginator = this.paginator;
  }

}

export interface PedidosElement{
  id: number;
  fecha: Date;
  estadoPedido: string;
  lineasPedido: number;
  entrega: string;
}
