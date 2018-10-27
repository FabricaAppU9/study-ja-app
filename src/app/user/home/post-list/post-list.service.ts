import { HttpClient,  HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Post } from "./post-list";

const API = 'http://localhost:3000/resumos/';

@Injectable()

export class PostListService{

    constructor(private http: HttpClient){ }

    listFromPosts(tipo: string){
        var headers = new HttpHeaders()
            //headers = headers.append("Content-Type", "application/json");
            headers = headers.append("Access-Control-Allow-Origin", "*");
            //headers = headers.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            //headers = headers.append( "Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            headers = headers.set("apitoken", "XjpcXLgDcrXwgNXue6HDjQfBrDC2Lqm8QbsjPaAMfkG5yfNNyxeP7mVt");
            
            console.log(headers);

            if(tipo == "LIVRO"){
                return this.http
                    .get<Post[]>(API + "livros", {headers: headers});
            }else if(tipo == "ARTIGO"){
                console.log("Breakpoint não configurado na API para Artigo")
            }
    }
}