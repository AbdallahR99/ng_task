import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { IAuthService } from '../_base/iauth';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: IAuthService,
      useClass: AuthService
    }
  ]
})
export class ApiModule { }
