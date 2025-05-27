import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionario } from "../models/funcionario";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5258/api/auth';
  private usuario: any = null;

  constructor(private http: HttpClient) {}

  login(cpf: string, senha: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { cpf, senha });
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

  logout() {
    localStorage.clear();
    this.usuario = null;
  }

  alterarSenha(senhaAtual: string, novaSenha: string) {
   return this.http.post<{ token: string }>(`${this.apiUrl}/change-password`, { senhaAtual, novaSenha });
}

  cadastrar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.apiUrl}/register`, funcionario);
  }

}
