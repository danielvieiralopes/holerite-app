import { Funcionario } from './../../core/models/funcionario';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { FuncionarioService } from '../../core/services/funcionario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  imports: [FormsModule,CommonModule]

})
export class CadastroFuncionarioComponent {
  form;
  funcionario: Funcionario = { nome: '', cpf: '', dataNascimento: '' };
  mensagem = '';
  showMessage = false;
  progress = 100;
  intervalId: any;

  constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {this.form =this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required]
  })}


    formatCpf() {
    this.funcionario.cpf = this.funcionario.cpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

cadastrarFuncionario(form: NgForm) {
  this.funcionarioService.cadastrar(this.funcionario).subscribe({
    next: () => {
      this.mensagem = 'Funcionário cadastrado com sucesso!';
      this.funcionario = { nome: '', cpf: '', dataNascimento: '' };
    },
    error: () => {
      this.mensagem = 'Erro ao cadastrar funcionário.';
    }
  });

    form.resetForm();

     this.showMessage = true;
    this.progress = 100;

    // Anula qualquer timer anterior
    if (this.intervalId) clearInterval(this.intervalId);

    const totalDuration = 3000; // 3 segundos
    const stepTime = 50;        // a cada 50ms atualiza barra
    const stepCount = totalDuration / stepTime;
    let currentStep = 0;

    this.intervalId = setInterval(() => {
      currentStep++;
      this.progress = 100 - (currentStep / stepCount) * 100;

      if (currentStep >= stepCount) {
        clearInterval(this.intervalId);
        this.showMessage = false;
      }
    }, stepTime);
}
}
