import { Component, Input } from "@angular/core";

@Component({
    selector: 'card-resume',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})

export class PostCardComponent{

    @Input('posts') post: any[];
    @Input('title') title: String;
    @Input('postType') type: String;
}