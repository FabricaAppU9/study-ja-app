import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/helpers/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { CommentsComponent } from './post/comments/comments.component';
import { PostComponent } from './post/post.component';
import { CommentSendComponent } from './post/comments/comment-send/comment-send.component';
import { ThumbnailUserComponent } from './post/comments/thumbnail-user/thumbnail-user.component';
import { CommentComponent } from './post/comments/comment/comment.component';
import { RatingComponent } from './post/viewpost/rating/rating.component';
import { RatingStarsComponent } from './post/viewpost/rating/rating-stars/rating-stars.component';
import { CommentAnswerComponent } from './post/comments/comment/comment-answer/comment-answer.component';

@NgModule({
    declarations: [ SignInComponent, SignupComponent,
         CommentsComponent, PostComponent, CommentSendComponent, 
         ThumbnailUserComponent, CommentComponent, RatingComponent, RatingStarsComponent, CommentAnswerComponent ],
    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        FormsModule,
        
        VMessageModule
    ],
    exports: [RatingComponent]
})

export class HomeModule{}