import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthGuard } from ".";
const defaultPath = '/';
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};

@Injectable()
export class AuthenticationService implements CanActivate {
  constructor(private router: Router, private authService: AuthGuard) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig.path);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig.path;
    }

    return isLoggedIn || isAuthForm;
  }
  isLoggedIn(): boolean {
    // if (!this.apiService.accessToken) {
    //   return false;
    // }

    // if (this.jwtHelper.isTokenExpired(this.apiService.accessToken)) {
    //   return false;
    // }
    // Will be refresh token
    return true;
  }
  redirectToHome(homeUrl?: string) {
    if (homeUrl) {
      this.router.navigateByUrl(homeUrl);
    } else {
      // TODO: Handle other cases
      console.error('None homeUrl');
      this.router.navigate(['/']);
    }
  }
}
