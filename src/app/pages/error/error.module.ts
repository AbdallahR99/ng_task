import { NgModule } from '@angular/core';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { SharedModule } from '@core/modules/shared/shared.module';


@NgModule({
  declarations: [
    ErrorComponent,
    NotFoundComponent,
    UnknownComponent,
  ],
  imports: [
    SharedModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
