import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionario } from "../models/funcionario";
import { tap, map } from 'rxjs/operators';
import { ETipoUsuario } from "../enums/EtipoUsuario";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private urlService = 'auth';
  private usuario: any = null;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(cpf: string, senha: string): Observable<{ token: string, tipoUsuario: ETipoUsuario }> {
    return this.http.post<{ token: string, tipoUsuario: ETipoUsuario }>(`${environment.apiUrl}${this.urlService}/login`, { cpf, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        if (res.tipoUsuario != null) {
          localStorage.setItem('tipoUsuario', res.tipoUsuario?.toString() ?? '');
        }
      })
    );
  }

   getUsuarioLogado() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken && decodedToken['given_name']) {
        const fullName = decodedToken['given_name'];
        const username = decodedToken['unique_name'] || '';
        const firstName = fullName.split(' ')[0];

        return { name: firstName, username: username  };
      }
      return null;
    }
    return null;
  }

  getTipoUsuario(): ETipoUsuario | null {
    const tipoUsuarioStr = localStorage.getItem('tipoUsuario');
    if (tipoUsuarioStr) {
      return parseInt(tipoUsuarioStr, 10) as ETipoUsuario;
    }
    return null;
  }

  logout() {
    localStorage.clear();
    this.usuario = null;
  }

  alterarSenha(senhaAtual: string, novaSenha: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}${this.urlService}/change-password`, { senhaAtual, novaSenha }, { observe: 'response', responseType: 'text' })
      .pipe(
        tap(response => {
          if (response.status === 200 || response.status === 204) {
            console.log('Senha alterada com sucesso');
          } else {
            throw new Error(`Erro ao alterar a senha: ${response.status}`);
          }
        })
      );
  }

  cadastrar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${environment.apiUrl}${this.urlService}/register`, funcionario);
  }

}
