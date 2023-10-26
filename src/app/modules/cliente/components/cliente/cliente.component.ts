import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/modules/shared/services/cliente.service';
import { NewClienteComponent } from '../new-cliente/new-cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any;
  nuevoCliente: any;

  private clienteService = inject(ClienteService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

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
      this.clientes.push(cliente);
    });
  }

  processClienteResponse(data: any[]){
    this.dataSource = new MatTableDataSource<ClienteElement>(data);
    this.dataSource.paginator = this.paginator;
  }

  openClienteDialog(){
    const dialogRef = this.dialog.open(NewClienteComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {

      if( result == 1){
        this.openSnackBar("Cliente agregado", "Exitosamente");
        this.obtenerClientes();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar el cliente", "Error");
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }

}

export interface ClienteElement{
  nombre: string;
  direccion: string;
  contacto: number;
  informacionAdicional: string;
}
