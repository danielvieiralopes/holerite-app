import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holerite } from '../models/holerite';
import { HoleriteResponse } from '../models/holeriteResponse';
import { HoleriteRequest } from '../models/holeriteRequest';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoleriteService {
  private urlService = 'holerites';

  constructor(private http: HttpClient) {}

  uploadHolerite(file: File, mesReferencia: number, anoReferencia: number, tipoHolerite: number): Observable<any> {
    const formData = new FormData();
    formData.append('ArquivoPdf', file, file.name);
    formData.append('MesReferencia', mesReferencia.toString());
    formData.append('AnoReferencia', anoReferencia.toString());
    formData.append('TipoHolerite', tipoHolerite.toString());

    return this.http.post(`${environment.apiUrl}${this.urlService}/upload`, formData, { responseType: 'text' });
  }

  consultaHolerite(consulta: HoleriteRequest): Observable<Blob> {
    return this.http.post(`${environment.apiUrl}${this.urlService}/consulta`, consulta, { responseType: 'blob' });
  }

  atualizarHolerite(id: number, file: File, mesReferencia: number, anoReferencia: number, tipoHolerite: number): Observable<any> {
    const formData = new FormData();
    formData.append('ArquivoPdf', file, file.name);
    formData.append('MesReferencia', mesReferencia.toString());
    formData.append('AnoReferencia', anoReferencia.toString());
    formData.append('TipoHolerite', tipoHolerite.toString());

    return this.http.put(`${environment.apiUrl}${this.urlService}/${id}`, formData, { responseType: 'text' });
  }

  excluirHolerite(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${this.urlService}/${id}`, { responseType: 'text' });
  }

  listarHolerites(): Observable<HoleriteResponse[]> {
    return this.http.get<HoleriteResponse[]>(`${environment.apiUrl}${this.urlService}`);
  }
}
