import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/modules/shared/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any;
  nuevoCliente: any;

  constructor(private clienteService: ClienteService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  displayedColumns: string[] = ['nombre', 'direccion', 'contacto', 'informacionAdicional'];
  dataSource = new MatTableDataSource<ClienteElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe((clientes:any) => {
      this.processClienteResponse(clientes);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  crearCliente(): void {
    this.clienteService.crearCliente(this.nuevoCliente).subscribe((cliente) => {
      this.clientes.push(cliente); // Agregar el nuevo cliente a la lista
      this.nuevoCliente = { nombre: '', direccion: '', contacto: '', informacionAdicional: '' }; // Limpiar el formulario
    });
  }

  processClienteResponse(dataEmpleado: any[]){
    this.dataSource = new MatTableDataSource<ClienteElement>(dataEmpleado);
    this.dataSource.paginator = this.paginator;
  }

}

export interface ClienteElement{
  nombre: string;
  direccion: string;
  contacto: number;
  informacionAdicional: string;
}
