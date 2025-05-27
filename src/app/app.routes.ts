import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaFuncionariosComponent } from './funcionarios/lista-funcionarios/lista-funcionarios.component';
import { CadastroFuncionarioComponent } from './funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroHoleriteComponent } from './holerites/cadastro-holerite/cadastro-holerite.component';
import { ConsultaHoleriteComponent } from './holerites/consulta-holerite/consulta-holerite.component';
import { AlterarSenhaComponent } from './auth/alterar-senha/alterar-senha.component';
import { authGuard } from './core/guards/auth.guard';
import { ETipoUsuario } from './core/enums/EtipoUsuario';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'alterar-senha', component: AlterarSenhaComponent},

  {
    path: '',
    component: LayoutComponent, // aqui entra a navbar + sidebar
    children: [
      { path: 'funcionarios', component: ListaFuncionariosComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'funcionarios/cadastrar', component: CadastroFuncionarioComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'holerites/upload', component: CadastroHoleriteComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'holerites/consulta', component: ConsultaHoleriteComponent, canActivate: [authGuard]},
      {path: 'alterar-senha', component: AlterarSenhaComponent},
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];
