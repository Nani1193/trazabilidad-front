import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosService } from 'src/app/modules/shared/services/productos.service';

@Component({
  selector: 'app-new-productos',
  templateUrl: './new-productos.component.html',
  styleUrls: ['./new-productos.component.css']
})
export class NewProductosComponent {


  public productosForm: FormGroup;
  estadoFormulario: string = "";
  panelOpenState = false;

  constructor(private fb: FormBuilder, private productosService: ProductosService, private dialogRef: MatDialogRef<NewProductosComponent>,

    //Se obtiene información del componente padre
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.estadoFormulario = "Agregar";

    this.productosForm = this.fb.group( {
      nombre: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      descripcion: ["", Validators.required],
      lineasPedido: ["", Validators.required],
      informacionAdicional: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      nombre: this.productosForm.get('nombre')?.value,
      descripcion: this.productosForm.get('descripcion')?.value,
      lineasPedido: this.productosForm.get('lineasPedido')?.value,
      informacionAdicional: this.productosForm.get('informacionAdicional')?.value,
    }

    this.productosService.saveProducto(data).subscribe((data: any)=>{
      console.log(data);
      this.dialogRef.close(1);
    }, (error: any) =>{
      this.dialogRef.close(2);
    })
  }

  onCancel(){
    this.dialogRef.close(3);

  }

  updateForm(data: any){
    this.productosForm = this.fb.group( {
      nombre: [data.nombre, Validators.required],
      descripcion: [data.descripcion, Validators.required],
      lineasPedido: [data.lineasPedido, Validators.required],
      informacionAdicional: [data.informacionAdicional, Validators.required],
    });

  }

}
