import { Injectable } from "@angular/core";

import { UserService } from "../user/user.service";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router
        ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{

        if(this.userService.isLogged()){
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}