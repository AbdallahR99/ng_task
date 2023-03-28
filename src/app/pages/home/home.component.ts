import { Component } from '@angular/core';
import { AppRoutes } from '@core/constants/routes';
import { FacadeService } from '@core/services/facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes = AppRoutes;
  constructor(private facadeService: FacadeService) {
    this.facadeService.authService.login('test', 'test');
  }

}
