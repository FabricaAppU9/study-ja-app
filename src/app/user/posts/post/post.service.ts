import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../post-list/post-list";

const API_URL = "https://studyja-api.azurewebsites.net/resumos/resumo";

@Injectable()

export class PostService{

    constructor(
        private http: HttpClient
        
        ){}

    getResumo(id: number){
        return this.http.
                get<Post>(API_URL + "/" + id);
    }

}