import { Component } from '@angular/core';
import { FacadeService } from '@core/services/facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isRouting$(): Observable<boolean> {
    return this.facadeService.routingService.loading$;
  }

  get showLayout$(): Observable<boolean> {
    return this.facadeService.routingService.showLayout$;
  }

  constructor(private facadeService: FacadeService) {}

}
