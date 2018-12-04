import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { UserService } from "../user/user.service";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable(   
)

export class AuthService{

    constructor(
        private http: HttpClient,
        private userService: UserService
        ){}

    authenticate(email: string, senha: string){
        return this.http.
            post(API_URL + 'usuarios/login', 
            {usu_email: email, usu_senha: senha},
            {observe: 'response'}
            ).pipe(tap(
                res => {
                    const authToken = res.body['token'];
                    this.userService.setToken(authToken);

                    console.log('Authenticated with token: ' + authToken);
                }
            ))
    }   
}