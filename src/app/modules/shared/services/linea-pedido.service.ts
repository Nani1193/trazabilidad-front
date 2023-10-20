import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/LineaPedido';

@Injectable({
  providedIn: 'root'
})
export class LineaPedidoService {

  constructor(private http: HttpClient) { }

  crearLineaPedido(lineaPedido: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/crearLineaPedido`, lineaPedido);
  }

  obtenerLineaPedido(): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}`);
  }
}
