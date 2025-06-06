import { Funcionario } from './../../core/models/funcionario';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ETipoUsuario } from '../../core/enums/EtipoUsuario';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  imports: [FormsModule,CommonModule]

})
export class CadastroFuncionarioComponent {
  form;
  funcionario: Funcionario = { nomeFuncionario: '', cpf: '', dataNascimento: '', tipoUsuario: ETipoUsuario.Usuario };
  mensagem = '';
  showMessage = false;
  progress = 100;
  intervalId: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {this.form =this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required]
  })}

  //tiposUsuarios
  tiposUsuarios = [
    { label: 'Usuário', value: ETipoUsuario.Usuario },
    { label: 'Administrador', value: ETipoUsuario.Admin }];

    formatCpf() {
    this.funcionario.cpf = this.funcionario.cpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

cadastrarFuncionario(form: NgForm) {
  this.funcionario.tipoUsuario = +this.funcionario.tipoUsuario;
  this.authService.cadastrar(this.funcionario).subscribe({
    next: () => {
      this.mensagem = 'Funcionário cadastrado com sucesso!';
      this.funcionario = { nomeFuncionario: '', cpf: '', dataNascimento: '', tipoUsuario: ETipoUsuario.Usuario }; // Limpa o formulário
    },
    error: () => {
      this.mensagem = 'Erro ao cadastrar funcionário.';
    }
  });

  form.resetForm();
}
}
