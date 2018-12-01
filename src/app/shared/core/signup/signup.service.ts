import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = 'https://studyja-api.azurewebsites.net/';

@Injectable()

export class Signup{
    constructor(private http: HttpClient){}

    signup(email:String,name:String,lastName:String,genre:String,from:String,cpf:Number,institute:String){
        return this.http.post(`${API_URL}usuarios/cadastro`,{})
    }
}

