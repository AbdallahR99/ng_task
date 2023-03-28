import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAuthService } from '../_base/iauth';
import { MockAuthService } from './auth/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: IAuthService,
      useClass: MockAuthService
    }
  ],
})
export class MockModule { }
