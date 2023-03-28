import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@env/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    environment.serviceModules,
  ]
})
export class AppServicesModule { }
