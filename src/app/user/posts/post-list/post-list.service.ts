import { HttpClient,  HttpHeaders  } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Post } from "./post-list";

const API = 'http://localhost:3000/resumos/livros';

@Injectable()

export class PostListService{

    constructor(private http: HttpClient){ }

    listFromPosts(tipo: string){
        return this.http
            .get<Post[]>(API);
    }
}