import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable(   
)

export class AuthService{

    constructor(private http: HttpClient){}

    authenticate(email: string, senha: string){
        return this
                .http.post(API_URL + 'usuarios/login', {usu_email: email, usu_senha: senha});
    }
    
}