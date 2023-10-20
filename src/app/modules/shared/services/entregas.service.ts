import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  constructor(private http: HttpClient) { }

  crearEntrega(entrega: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/crearEntrega`, entrega);
  }

  obtenerEntregas(): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}`);
  }
}
