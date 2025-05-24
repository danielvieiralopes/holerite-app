// src/app/menu-items.ts
export interface MenuItem {
  label: string;
  route: string;
  icon?: string;
  roles?: string[]; // para controle por perfil no futuro (admin, funcionario, etc.)
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Funcionários', route: '/funcionarios', icon: 'people' },
  { label: 'Cadastrar Holerite', route: 'holerites/upload', icon: 'upload' },
  { label: 'Consultar Holerites', route: 'holerites/consulta', icon: 'search' },
];
