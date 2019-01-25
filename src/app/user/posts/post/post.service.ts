import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Post } from "../post-list/post-list";

const API_URL = "http://localhost:3000/resumos/resumo";
      
@Injectable()

export class PostService{

    constructor(
        private http: HttpClient
        ){}

    getResumo(id: number){
               return this.http.
                    post<Post>(API_URL + "/" + id, 
                        {
                            type: "L"
                        });
    }

}