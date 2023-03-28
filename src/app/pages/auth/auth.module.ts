import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@core/modules/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AuthTemplateComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    CheckboxModule
  ]
})
export class AuthModule { }
