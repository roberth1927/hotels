import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
