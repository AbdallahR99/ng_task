import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppServicesModule } from '@core/services/app-services.module';
import { CommonPrimeModule } from '../common-prime/common-prime.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [
    CommonModule,
    CommonPrimeModule,
    RouterModule,
    AppServicesModule,
    FormsModule,
  ]
})
export class SharedModule { }
