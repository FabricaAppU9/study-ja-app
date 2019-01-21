import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "./post.service";
import { Post } from "../post-list/post-list";

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent{
    id: number;
    inscricao: Subscription;
    post: Post;
    tags: Post;

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

        this.getResumo();
    }

    getResumo(){
       this.postService.
            getResumo(this.id)
            .subscribe( post => {
                this.post = post[0],
                this.tags = post,
                console.log(this.post);
            })
    }

    ngOnDestroy(){
        this.inscricao.unsubscribe();
    }
}