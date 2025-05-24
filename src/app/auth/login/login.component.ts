import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const { cpf, senha } = this.form.value;
    this.auth.login(cpf!, senha!).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/holerites/consulta']);
      },
      error: () => alert('CPF ou senha inválidos.')
    });
  }
}
