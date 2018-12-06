import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { PostService } from "./post.service";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit{
    
    id: number;
    inscricao: Subscription;
    post: any[] = [];

    constructor(
        private activatedRoute: ActivatedRoute
        ){}

    ngOnInit(){
        this.inscricao = this.activatedRoute.params.subscribe(
            (params: any) => {
                this.id = params['id'];
            }
        )
    }

    ngOnDestroy(){
        this.inscricao.unsubscribe();
    }
}
