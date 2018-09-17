import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { PostService } from "./post.service";

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit{
    
    id: number;
    inscricao: Subscription;
    post: any[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private postService: PostService
        ){}

    ngOnInit(){
        this.inscricao = this.activatedRoute.params.subscribe(
            (params: any) => {
                this.id = params['id'];
            }
        )

        this.carregaPost(this.id);
    }

    carregaPost(id: number){
        this.postService
            .listPost(id)
            .subscribe(
                post => {
                    this.post = post;
                    console.log(post);
                }
            )
    }

    ngOnDestroy(){
        this.inscricao.unsubscribe();
    }
}
