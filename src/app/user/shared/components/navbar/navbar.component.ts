/**
 * @NAVBAR COMPONENT - 
 * 
 * 1. MODULOS DO ANGULAR
 */

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

/*
* 2. SERVIÇOS DA APLICAÇÃO
*/
import { UserService } from '../../../../shared/core/user/user.service';

/*
* 3. INTERFACES DA APLICAÇÃO
*/
import { User } from '../../../../shared/core/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<User>;

  constructor(
      private userService: UserService,
      private router: Router
      ) { 
            this.user$ = this.userService.getUser();
        }

  @Input() headerColor: string;

    hasColor: boolean = true;
    montaStr: string;

    ngOnInit(){
        if (this.headerColor == 'transparent'){
            this.montaStr =  this.headerColor + " z-depth-0";
        }else{
            this.montaStr =  this.headerColor;
        }
    }

    getClasses(){
        return this.montaStr;
    }

    onClickLogout(){
        this.userService.logout();
        this.router.navigate(['signin']);
    }
}
