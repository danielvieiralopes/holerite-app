import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = 'http://localhost:5258/api/Usuarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  atualizar(funcionario: Funcionario): Observable<HttpResponse<Funcionario>> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${funcionario.id}`, funcionario, { observe: 'response' });
  }

  excluir(id: number): Observable<HttpResponse<any>> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, null, { observe: 'response' });
  }
}
