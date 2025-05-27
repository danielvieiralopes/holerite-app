import { MenuItem } from './../core/models/menu-items';
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  usuario: any;
  sidebarVisible = true;
  isSmallScreen = false;

    menuItems = [
      { label: '🔍  Holerite', route: '/holerites/consulta' },
      { label: '📤 Cadastrar Holerites', route: '/holerites/upload' },
    { label: ' 📋 Funcionários', route: '/funcionarios' },
    { label: '➕ Cadastrar Funcionário', route: '/funcionarios/cadastrar' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuarioLogado();
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 992; // Bootstrap 'lg' breakpoint
    if (this.isSmallScreen) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
