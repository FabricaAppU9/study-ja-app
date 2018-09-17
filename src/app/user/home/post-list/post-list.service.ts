import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Post } from "./post-list";

const API = 'http://localhost:3000/';

@Injectable()

export class PostListService{

    constructor(private http: HttpClient){ }

    listFromPosts(tipo: string){
        if(tipo == "LIVRO"){
            return this.http
                .get<Post[]>(API + "resumos");
        }else if(tipo == "ARTIGO"){
            console.log("Breakpoint não configurado na API para Artigo")
        }
    } 
}