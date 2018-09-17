import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API = 'http://localhost:3000/resumos'; // Buscar uma alternativa de declarar globalmente

@Injectable()

export class PostService{

    constructor(private http: HttpClient){}

    listPost(id: number){
        return this.http
                .get<any[]>(API);
    }
}