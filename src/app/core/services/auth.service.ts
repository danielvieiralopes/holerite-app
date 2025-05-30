import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionario } from "../models/funcionario";
import { tap, map } from 'rxjs/operators';
import { ETipoUsuario } from "../enums/EtipoUsuario";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5258/api/auth';
  private usuario: any = null;

  constructor(private http: HttpClient) {}

  login(cpf: string, senha: string): Observable<{ token: string, tipoUsuario: ETipoUsuario }> {
    return this.http.post<{ token: string, tipoUsuario: ETipoUsuario }>(`${this.apiUrl}/login`, { cpf, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        if (res.tipoUsuario != null) {
          localStorage.setItem('tipoUsuario', res.tipoUsuario?.toString() ?? '');
        }
      })
    );
  }

   getUsuarioLogado() {
    if (!this.usuario) {
      const usuarioStr = localStorage.getItem('usuario');
      if (usuarioStr) {
        this.usuario = JSON.parse(usuarioStr);
      }
    }
    return this.usuario;
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
    return this.http.post(`${this.apiUrl}/change-password`, { senhaAtual, novaSenha }, { observe: 'response', responseType: 'text' })
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
    return this.http.post<Funcionario>(`${this.apiUrl}/register`, funcionario);
  }

}
