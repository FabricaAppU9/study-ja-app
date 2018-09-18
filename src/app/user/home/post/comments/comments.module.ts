import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentAnswerComponent } from './comment/comment-answer/comment-answer.component';
import { CommentComponent } from './comment/comment.component';
import { ThumbnailUserComponent } from './thumbnail-user/thumbnail-user.component';
import { CommentSendComponent } from './comment-send/comment-send.component';
import { CommentsComponent } from './comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    CommentAnswerComponent
  ],
  exports:[
    CommentsComponent,
    CommentSendComponent,
    ThumbnailUserComponent,
    CommentComponent,
    CommentAnswerComponent
  ]
})
export class CommentsModule { }
