import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { RouteData } from '@core/constants/route-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private showLayoutSubject = new BehaviorSubject<boolean>(true);
  public showLayout$ = this.showLayoutSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.LoadingListener();
    this.showLayoutListener();
  }

  LoadingListener(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingSubject.next(true);
      } else if (event instanceof NavigationEnd) {
        this.loadingSubject.next(false);
        const ev = event as NavigationEnd;
      }
    });
  }

  showLayoutListener() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const activatedRoute = this.getChild(
          data.state.root,
          (route) => (route.data as RouteData)?.showLayout === false
        );
        const snapshotData = activatedRoute.data as RouteData;
        let showLayout = snapshotData.showLayout;
        if (showLayout === undefined) {
          showLayout = true;
        }
        this.showLayoutSubject.next(showLayout);
      }
    });
  }

  getChild(
    activatedRoute: ActivatedRouteSnapshot,
    condition?: (route: ActivatedRouteSnapshot) => boolean
  ): ActivatedRouteSnapshot {
    if (condition && condition(activatedRoute)) {
      return activatedRoute;
    }
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild, condition);
    } else {
      return activatedRoute;
    }
  }
}
