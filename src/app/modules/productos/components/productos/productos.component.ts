import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from 'src/app/modules/shared/services/productos.service';
import { NewProductosComponent } from '../new-productos/new-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto: any;
  nuevoProducto: any;

    private productosService = inject(ProductosService);
    public dialog = inject(MatDialog);
    private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.obtenerProductos();
  }

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'lineasPedido', 'informacionAdicional'];
  dataSource = new MatTableDataSource<ProductosElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerProductos(): void {
    this.productosService.obtenerProductos().subscribe((productos:any) => {
      this.processProductoResponse(productos);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearProducto(): void {
    this.productosService.crearProducto(this.nuevoProducto).subscribe((productos) => {
      this.producto.push(productos);
    });
  }

  processProductoResponse(data: any[]){
    this.dataSource = new MatTableDataSource<ProductosElement>(data);
    this.dataSource.paginator = this.paginator;
  }

  openProductosDialog(){
    const dialogRef = this.dialog.open(NewProductosComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {

      if( result == 1){
        this.openSnackBar("Productos agregados", "Exitosamente");
        this.obtenerProductos();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar el producto", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

}

export interface ProductosElement{
  id: number;
  nombre: string;
  descripcion: string;
  lineasPedido: number;
  informacionAdicional: string;
}

