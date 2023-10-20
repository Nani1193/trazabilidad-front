import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { } // Eliminamos la inyección de ClienteService

  crearCliente(cliente: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearCliente`, cliente);
  }

  obtenerClientes(): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}`);
  }

  public saveCliente (data:any): Observable<any>{
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearCliente`, data);
  }
}
