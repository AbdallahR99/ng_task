import { Injectable } from '@angular/core';
import { IAuthService } from '../../_base/iauth';

@Injectable()
export class AuthService implements IAuthService {

  constructor() { }
  login(email: string, password: string): Promise<any> {
   console.log('login');
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
