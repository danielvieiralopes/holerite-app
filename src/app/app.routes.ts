import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListaFuncionariosComponent } from './funcionarios/lista-funcionarios/lista-funcionarios.component';
import { CadastroFuncionarioComponent } from './funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroHoleriteComponent } from './holerites/cadastro-holerite/cadastro-holerite.component';
import { ConsultaHoleriteComponent } from './holerites/consulta-holerite/consulta-holerite.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'funcionarios', component: ListaFuncionariosComponent },
  { path: 'funcionarios/cadastrar', component: CadastroFuncionarioComponent },
  { path: 'holerites/upload', component: CadastroHoleriteComponent },
  { path: 'holerites/consulta', component: ConsultaHoleriteComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
