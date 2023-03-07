import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Inquilinos } from '../model/inquilinos';

@Injectable({
  providedIn: 'root'
})

export class InquilinosService {
  private baseURL = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  //Este método nos sirve para obtener empleados.
  getInquilinos():Observable<Inquilinos[]>{
    return this.httpClient.get<Inquilinos[]>(`${this.baseURL}`+'/appBackend/ListaInquilino');
  }

  addInquilino(inquilinos:Inquilinos): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`+'/appBackend/CrearInquilino',inquilinos)
  }

  delInquilino(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}`+'/appBackend/EliminarInquilino/'+id)
  }

}
