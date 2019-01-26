import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './post-comments';

const API_URL = "https://studyja-api.azurewebsites.net/";

@Injectable()

export class PostCommentsService{

    constructor(private http: HttpClient){}

    listAllComments(idPost: number){
        return this
                .http.get<Comments[]>(API_URL + "resumos/resumo/comentarios/" + idPost);
    }
}