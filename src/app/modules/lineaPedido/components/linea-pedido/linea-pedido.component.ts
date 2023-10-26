import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LineaPedidoService } from 'src/app/modules/shared/services/linea-pedido.service';

@Component({
  selector: 'app-linea-pedido',
  templateUrl: './linea-pedido.component.html',
  styleUrls: ['./linea-pedido.component.css']
})

export class LineaPedidoComponent {
  lineaPedido: any;
  nuevoLineaPedido: any;

  constructor(private lineaPedidoService: LineaPedidoService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  displayedColumns: string[] = ['id', 'cantidad', 'fecha', 'tipo'];
  dataSource = new MatTableDataSource<LineaPedidoElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerProductos(): void {
    this.lineaPedidoService.obtenerLineaPedido().subscribe((producto:any) => {
      this.processLineaPedidoResponse(producto);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearLineaPedido(): void {
    this.lineaPedidoService.crearLineaPedido(this.nuevoLineaPedido).subscribe((lineaPedido) => {
      this.lineaPedido.push(lineaPedido);
    });
  }

  processLineaPedidoResponse(data: any[]){
    this.dataSource = new MatTableDataSource<LineaPedidoElement>(data);
    this.dataSource.paginator = this.paginator;
  }

}

export interface LineaPedidoElement{
  id: number;
  cantidad: number;
  nombre: string;
  fecha: Date;
  tipo: string;
}

