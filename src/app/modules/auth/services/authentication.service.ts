import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthGuard } from ".";
const defaultPath = '/';
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-chibi-buon-dep-nhat-629x600.jpg'
};

@Injectable()
export class AuthenticationService implements CanActivate {
  constructor(private router: Router, private authGuad: AuthGuard) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authGuad.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig.path);

    if (isLoggedIn && isAuthForm) {
      this.authGuad.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authGuad.lastAuthenticatedPath = route.routeConfig.path;
    }

    return isLoggedIn || isAuthForm;
  }
}
