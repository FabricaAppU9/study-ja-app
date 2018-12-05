import { Component, Input } from "@angular/core";
import { Post } from "../post-list";

@Component({
    selector: 'card-resume',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})

export class PostCardComponent{

    @Input('posts') post: Post;
    @Input('title') title: string;
    @Input('postType') type: string;
}