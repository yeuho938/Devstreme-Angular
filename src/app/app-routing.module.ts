import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { LoginFormComponent } from './modules/auth/components/login-form/login-form.component';
const routes: Routes = [
    {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
    {
        path: 'admin/dashboard',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthenticationService]
    },
    {
      path: 'homepage',
      loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule),
      canActivate: [AuthenticationService]
  },
    {
        path: 'login',
        component: LoginFormComponent
        // loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    },
];

const config: ExtraOptions = {
    useHash: false
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
