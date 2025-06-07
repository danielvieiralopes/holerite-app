import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private urlService = 'Usuarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${environment.apiUrl}${this.urlService}`);
  }

  atualizar(funcionario: Funcionario): Observable<HttpResponse<Funcionario>> {
    return this.http.put<Funcionario>(`${environment.apiUrl}${this.urlService}/${funcionario.id}`, funcionario, { observe: 'response' });
  }

  excluir(id: number): Observable<HttpResponse<any>> {
    return this.http.patch<any>(`${environment.apiUrl}${this.urlService}/${id}`, null, { observe: 'response' });
  }
}
