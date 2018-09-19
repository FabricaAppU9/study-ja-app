import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentAnswerComponent } from './comment/comment-answer/comment-answer.component';
import { CommentComponent } from './comment/comment.component';
import { ThumbnailUserComponent } from './thumbnail-user/thumbnail-user.component';
import { CommentSendComponent } from './comment-send/comment-send.component';
import { CommentsComponent } from './comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommentLikesComponent } from './comment-likes/comment-likes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CommentsComponent,
    CommentSendComponent,
    ThumbnailUserComponent,
    CommentComponent,
    CommentAnswerComponent,
    CommentLikesComponent
  ],
  exports:[
    CommentsComponent,
    CommentSendComponent,
    ThumbnailUserComponent,
    CommentComponent,
    CommentAnswerComponent,
    CommentLikesComponent
  ]
})
export class CommentsModule { }
