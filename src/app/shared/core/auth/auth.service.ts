import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { TokenService } from "../token/token.service";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable(   
)

export class AuthService{

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
        ){}

    authenticate(email: string, senha: string){
        return this.http.
            post(API_URL + 'usuarios/login', 
            {usu_email: email, usu_senha: senha},
            {observe: 'response'}
            ).pipe(tap(
                res => {
                    const authToken = res.body['token'];
                    this.tokenService.setToken(authToken);
                }
            ))
    }   
}