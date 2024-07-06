import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './servies/auth.service';
import { inject } from '@angular/core';
import { LoginService } from './servies/login.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  // if(authService.isAuthenticated()) {
  //   return true;
  // } else {
  //   router.navigate(['/login'])
  //   return false;
  // }
  const loginService = inject(LoginService)
  return loginService.login().pipe(map((res: any) => {
    console.log('res', res);
    if(res.find((login: any) => login.id === 1)) {
      return true;
    } else {
      router.navigate(['/login'])
      return false;
    }
  }))
  // if(authService.isAuthenticated()) {
  //   return true;
  // } else {
  //   router.navigate(['/login'])
  //   return false;
  // }
};
