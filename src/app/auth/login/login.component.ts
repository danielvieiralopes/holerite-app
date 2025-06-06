import { Component } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ETipoUsuario } from "../../core/enums/EtipoUsuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  form;
  mensagemErro = '';
  senhaVisivel = false;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {this.form = this.fb.group({
    cpf: ['', Validators.required],
    senha: ['', Validators.required]
  })}

  toggleSenhaVisivel(): void {
    this.senhaVisivel = !this.senhaVisivel;
  }


onSubmit() {
  if (this.form.invalid) return;

  const { cpf, senha } = this.form.value;

  this.auth.login(cpf!, senha!).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.token);
      if (res.tipoUsuario != null) {
        localStorage.setItem('tipoUsuario', res.tipoUsuario.toString());
      }

      if (res.precisaTrocarSenha) {
        localStorage.setItem('cpf_temp', cpf ?? '');
        localStorage.setItem('senha_temp', senha ?? '');

        this.router.navigate(['/alterar-senha']);
      } else {
               this.router.navigate([res.tipoUsuario === ETipoUsuario.Admin ? '/holerites/lista' : '/holerites/consulta']);
      }
    },
    error: (err) => {
      alert('CPF ou senha inválidos.');
    }
  });
}


}
