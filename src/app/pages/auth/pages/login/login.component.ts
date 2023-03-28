import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/constants/routes';
import { Login } from '@core/models/auth/login.model';
import { ToasterService } from '@core/services/common/toaster.service';
import { FacadeService } from '@core/services/facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new Login();
  routes = AppRoutes;
  constructor(private facadeService: FacadeService, private router: Router) { }


  onLoginSuccess(): void {
    this.facadeService.toasterService.success({ summary: 'Success', detail: 'Logged In Successfully' });
    this.router.navigate([this.routes.User]);
  }

  loginByUAEPass(): void {
    this.onLoginSuccess();
  }

  submit(form?: NgForm): void {
    if (form?.invalid) {
      return;
    }
    this.onLoginSuccess();
  }

}
