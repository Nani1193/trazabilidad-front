import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'src/app/modules/shared/services/cliente.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {
  cliente: any;

  public clienteForm: FormGroup;
  estadoFormulario: string = "";
  panelOpenState = false;

  constructor(private fb: FormBuilder, private clienteService: ClienteService, private dialogRef: MatDialogRef<NewClienteComponent>,

    //Se obtiene información del componente padre
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.estadoFormulario = "Agregar";

    this.clienteForm = this.fb.group( {
      nombre: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      direccion: ["", Validators.required],
      contacto: ["", Validators.required],
      informacionAdicional: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      nombre: this.clienteForm.get('nombre')?.value,
      direccion: this.clienteForm.get('cantidad')?.value,
      contacto: this.clienteForm.get('contacto')?.value,
      informacionAdicional: this.clienteForm.get('informacionAdicional')?.value,
    }

    this.clienteService.saveCliente(data).subscribe((data: any)=>{
      console.log(data);
      this.dialogRef.close(1);
    }, (error: any) =>{
      this.dialogRef.close(2);
    })
  }

  onCancel(){
    this.dialogRef.close(3);

  }

  updateForm(dataCliente: any){
    this.clienteForm = this.fb.group( {
      nombre: [dataCliente.nombre, Validators.required],
      direccion: [dataCliente.direccion, Validators.required],
      contacto: [dataCliente.contacto, Validators.required],
      informacionAdicional: [dataCliente.informacionAdicional, Validators.required],
    });

  }

}
