import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post-list/post-list';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterializeAction } from "angular2-materialize";
import { Comments } from '../post-comments/post-comments';

@Component({
    templateUrl: './post-text.component.html',
    styleUrls: ['./post-text.component.scss']
})

export class PostTextComponent implements OnInit{
    
    inscricao: Subscription;
    post: Post;
    id: number;
    comments: Comments[] = [];

    colorThemeStatus: boolean = false;

    constructor(
        private postService: PostService,
        private activateRoute: ActivatedRoute
    ){}

    ngOnInit() {
        this.getIdPost();
        this.getResumo();
    }
    
    getIdPost(){
        this.inscricao = this.activateRoute.params.subscribe(
            (params: any) => {
                this.id = params["id"];
            }
        )
    }

    getResumo(){
        this.postService
        .getResumo(this.id).subscribe(
            post => {
                this.post = post[0],
                console.log(post)
            }
        )
    }

    colorTheme(){
        this.colorThemeStatus = !this.colorThemeStatus;
    }

    modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
        this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
        this.modalActions.emit({action:"modal",params:['close']});
    }

    newComment(comment) {
        this.comments.push(comment);
    }
}