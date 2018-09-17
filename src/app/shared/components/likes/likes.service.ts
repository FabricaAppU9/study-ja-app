import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class LikesService{

    constructor(
        private http: HttpClient
    ){}

    saveLike(type: string){
        //
    }
}