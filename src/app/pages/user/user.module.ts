import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '@core/modules/shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { UserStatusComponent } from './pages/user-status/user-status.component';
import { StatusDetailsComponent } from './pages/status-details/status-details.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    UserComponent,
    UserStatusComponent,
    StatusDetailsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    RatingModule,
    BreadcrumbModule
  ]
})
export class UserModule { }
