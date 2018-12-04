/**
 * @USER SERVICE - 
 * 
 * 1. MODULOS DO ANGULAR
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

/*
* 2. SERVIÇOS DA APLICAÇÃO
*/
import { TokenService } from '../token/token.service';

/*
* 3. INTERFACES DA APLICAÇÃO
*/
import { User } from '../user/user';

/*
* 3. IMPORT DE TERCEIROS
*/
import * as jtw_decode from 'jwt-decode';

@Injectable()
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }
  
  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
     const token = this.tokenService.getToken();
     const user = jtw_decode(token) as User;
     this.userSubject.next(user);
     console.log(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
}
