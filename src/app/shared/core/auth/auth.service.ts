import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Token } from "@angular/compiler";
import { TokenService } from "../token/token.service";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable(   
)

export class AuthService{

    constructor(
        private http: HttpClient,
        private token: TokenService
    ){}

    authenticate(email: string, senha: string){
        return this.http
            .post(API_URL + 'usuarios/login', 
            {usu_email: email, usu_senha: senha}, 
            {observe: 'response'}
            )
            .pipe(tap(res => {
                const authToken = res.body['token'];
                //const idUser = res.body['usu_id'];
                this.token.setToken(authToken);
                //console.log(authToken);
            }))
        }
}