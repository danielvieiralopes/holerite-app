import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  imports: [FormsModule,CommonModule,ReactiveFormsModule]
})
export class AlterarSenhaComponent {
  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { this.form = this.fb.group({
    novaSenha: ['', [Validators.required, Validators.minLength(6)]]
  }); }

  onSubmit() {
    if (this.form.invalid) return;

    const novaSenha = this.form.value.novaSenha;
    const cpf = localStorage.getItem('cpf_temp');
    const senhaAntiga = localStorage.getItem('senha_temp');

    this.auth.alterarSenha(senhaAntiga!, novaSenha!).subscribe({
      next: () => {
        localStorage.removeItem('cpf_temp');
        localStorage.removeItem('senha_temp');
        alert('Senha alterada com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro ao alterar a senha:', error);
        alert('Erro ao alterar a senha. Por favor, tente novamente.');
      }
    });
  }
}
