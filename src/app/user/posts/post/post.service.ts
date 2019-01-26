import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Post } from "../post-list/post-list";
import { Observable } from "rxjs";

const API_URL = "https://studyja-api.azurewebsites.net/resumos/resumo";
      
@Injectable()

export class PostService{

    sendPost = new EventEmitter<Post>();

    constructor(private http: HttpClient){}

    getResumo(id: number){
        return this.http.
            post<Post>(
                API_URL + "/" + id, { type: "L" }
            );  
    }

    emitirPost(post: Post){
        this.sendPost.emit(post);
    }



}