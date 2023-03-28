import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePaths } from '@core/constants/routes';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: routePaths.AuthLogin, component: LoginComponent },
    { path: routePaths.AuthRegister, component: RegisterComponent },
    { path: '', redirectTo:  routePaths.AuthLogin, pathMatch: 'full' },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
