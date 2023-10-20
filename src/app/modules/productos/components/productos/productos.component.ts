import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from 'src/app/modules/shared/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto: any;
  nuevoProducto: any;

  constructor(private productosService: ProductosService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'lineasPedido', 'informacionAdicional'];
  dataSource = new MatTableDataSource<ProductosElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe((producto:any) => {
      this.processProductosResponse(producto);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearProducto(): void {
    this.productosService.crearProducto(this.nuevoProducto).subscribe((productos) => {
      this.producto.push(productos);
    });
  }

  processProductosResponse(data: any[]){
    this.dataSource = new MatTableDataSource<ProductosElement>(data);
    this.dataSource.paginator = this.paginator;
  }

}

export interface ProductosElement{
  id: number;
  nombre: string;
  descripcion: string;
  lineasPedido: number;
  informacionAdicional: string;
}

