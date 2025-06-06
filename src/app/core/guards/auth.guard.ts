import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';



export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];
  const tipoUsuario = authService.getTipoUsuario();



  if (!localStorage.getItem('token') || !tipoUsuario || (expectedRole && tipoUsuario !== expectedRole)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
