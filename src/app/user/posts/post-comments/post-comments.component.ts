import { Component, OnInit } from '@angular/core';
import { PostCommentsService } from './post-comments.service';
import { Comments } from './post-comments';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comments[] = [];
  inscricao: Subscription;
  id: number;

  constructor(
    private commentsService: PostCommentsService,
    private activateRoute: ActivatedRoute
  ){}

  ngOnInit() {
    this.getIdPost();
    this.getAllComments();
  }

  getIdPost(){
    this.inscricao = this.activateRoute.params.subscribe(
      (params: any) => {
        this.id = params["id"];
      }
    )
  }

  getAllComments(){
    this.commentsService
      .listAllComments(this.id)
      .subscribe(
        comments => {
          this.comments = comments
      })
  }

  newComment(comment) {
    this.comments.push(comment);
  }

  

}
