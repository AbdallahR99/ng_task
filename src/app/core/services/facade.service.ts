import { forwardRef, Injectable, Injector } from '@angular/core';
import { AppServicesModule } from './app-services.module';
import { RoutingService } from './common/routing.service';
import { ToasterService } from './common/toaster.service';
import { IAuthService } from './_base/iauth';

@Injectable({
  providedIn: forwardRef(() => AppServicesModule)
})
export class FacadeService {
  private _authService?: IAuthService;
  private _routingService?: RoutingService;
  private _toasterService?: ToasterService;

  constructor(private inject: Injector) { }
  //// Common /////
  /**
   * Routing service
   *
   */
  public get routingService(): RoutingService {
    if (!this._routingService) {
      this._routingService = this.inject.get(RoutingService);
    }
    return this._routingService;
  }
   /**
   * Routing service
   *
   */
   public get toasterService(): ToasterService {
    if (!this._toasterService) {
      this._toasterService = this.inject.get(ToasterService);
    }
    return this._toasterService;
  }


  //// API /////

  /**
   * auth service
   *
   */
  public get authService(): IAuthService {
    if (!this._authService) {
      this._authService = this.inject.get(IAuthService);
    }
    return this._authService;
  }
}
