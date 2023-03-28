import { forwardRef, Injectable } from '@angular/core';
import { IAuthService } from '../../_base/iauth';
import { MockModule } from '../mock.module';

@Injectable({
  providedIn: forwardRef(() => MockModule),


})
export class MockAuthService implements IAuthService {

  constructor() { }
  login(email: string, password: string): Promise<any> {
    console.log('login', 'hello from mock');
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve({
         email: '',
         password: ''
       });
     }, 1000);
     });
  }
  logout(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
