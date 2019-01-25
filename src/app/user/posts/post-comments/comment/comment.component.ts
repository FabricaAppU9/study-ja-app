import { Component, OnInit, Input } from '@angular/core';
import { Comments } from '../post-comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input('comment') comment: Comments;
  @Input('photo') photo;
  constructor() { }

  ngOnInit() {

  }

}
