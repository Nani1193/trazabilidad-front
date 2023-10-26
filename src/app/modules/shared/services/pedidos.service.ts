import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  crearPedido(pedido: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/crearPedido`, pedido);
  }

  obtenerPedidos(): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}`);
  }
}
