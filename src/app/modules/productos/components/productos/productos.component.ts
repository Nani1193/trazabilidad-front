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
    this.productosService.obtenerProductos().subscribe((clientes:any) => {
      this.processClienteResponse(clientes);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearProducto(): void {
    this.productosService.crearProducto(this.nuevoProducto).subscribe((productos) => {
      this.producto.push(productos); // Agregar el nuevo cliente a la lista
      this.nuevoProducto = { nombre: '', direccion: '', contacto: '', informacionAdicional: '' }; // Limpiar el formulario
    });
  }

  processClienteResponse(dataEmpleado: any[]){
    this.dataSource = new MatTableDataSource<ProductosElement>(dataEmpleado);
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

