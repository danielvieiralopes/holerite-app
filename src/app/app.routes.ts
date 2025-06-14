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
import { ListaHoleritesComponent } from './holerites/lista-holerites/lista-holerites.component';

export const routes: Routes = [
  // Página inicial redireciona para login
  { path: '', component: LoginComponent },

  // Rota para alterar senha fora do layout
  { path: 'alterar-senha', component: AlterarSenhaComponent },

  // Rotas protegidas dentro do layout
  {
    path: '',
    component: LayoutComponent, // Navbar + Sidebar
    children: [
      { path: 'funcionarios', component: ListaFuncionariosComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'funcionarios/cadastrar', component: CadastroFuncionarioComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'holerites/upload', component: CadastroHoleriteComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
      { path: 'holerites/consulta', component: ConsultaHoleriteComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Usuario } },
      { path: 'holerites/lista', component: ListaHoleritesComponent, canActivate: [authGuard], data: { expectedRole: ETipoUsuario.Admin } },
       { path: 'alterar-senha', component: AlterarSenhaComponent }
    ]
  },

  // Rota coringa para redirecionar rotas inválidas para login
  { path: '**', redirectTo: '' }
];
