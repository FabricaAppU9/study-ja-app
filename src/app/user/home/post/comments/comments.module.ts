import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { CommentsComponent } from './comments.component';
import { CommentSendComponent } from './comment-send/comment-send.component';
import { ThumbnailUserComponent } from './thumbnail-user/thumbnail-user.component';
import { CommentComponent } from './comment/comment.component';
import { CommentAnswerComponent } from './comment/comment-answer/comment-answer.component';

@NgModule({
    declarations:[
        CommentsComponent,
        CommentSendComponent,
        ThumbnailUserComponent,
        CommentComponent,
        CommentAnswerComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[

    ],
    providers:[

    ]
})

export class CommentsModule{}