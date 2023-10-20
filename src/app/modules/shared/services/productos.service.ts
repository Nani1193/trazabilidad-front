import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  crearProducto(producto: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/crearProducto`, producto);
  }

  obtenerProductos(): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}`);
  }

  public saveProducto (data:any): Observable<any>{
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearCProducto`, data);
  }
}
