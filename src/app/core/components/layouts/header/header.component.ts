import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { user } from '@core/constants/data';
import { AppRoutes } from '@core/constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  exportAs: 'appHeader'
})
export class HeaderComponent implements AfterViewChecked {
  viewChecked = false;
  user = user;
  routes = AppRoutes;
  ngAfterViewChecked(): void {
    setTimeout(() => {
      if (!this.viewChecked) {
        this.viewChecked = true;
      }
    }, 100);

  }

  @ViewChild('header', {static: false}) header?: ElementRef<HTMLElement>;

  get headerHeight(): number {
    if (!this.viewChecked) {
      return 0;
    }
    return this.header?.nativeElement.offsetHeight || 0;
  }

}
