import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EntregasService } from 'src/app/modules/shared/services/entregas.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent {
  entrega: any;
  nuevaEntrega: any;

  constructor(private entregasService: EntregasService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obtenerEntregas();
  }

  displayedColumns: string[] = ['id', 'pedido', 'estadoEntrega', 'nombre_cliente', 'fecha'];
  dataSource = new MatTableDataSource<EntregasElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerEntregas(): void {
    this.entregasService.obtenerEntregas().subscribe((clientes:any) => {
      this.processClienteResponse(clientes);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearEntrega(): void {
    this.entregasService.crearEntrega(this.nuevaEntrega).subscribe((entrega) => {
      this.entrega.push(entrega); // Agregar el nuevo cliente a la lista
      this.nuevaEntrega = { nombre: '', direccion: '', contacto: '', informacionAdicional: '' }; // Limpiar el formulario
    });
  }

  processClienteResponse(dataEmpleado: any[]){
    this.dataSource = new MatTableDataSource<EntregasElement>(dataEmpleado);
    this.dataSource.paginator = this.paginator;
  }

}

export interface EntregasElement{
  id: number;
  pedido: string;
  estadoEntrega: string;
  nombre_cliente: number;
  fecha: Date;
}

