import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-answer',
  templateUrl: './comment-answer.component.html',
  styleUrls: ['./comment-answer.component.scss']
})
export class CommentAnswerComponent implements OnInit {

  public state_answer:string = "Ver";
  public state_answer_icon:string = "arrow_drop_down";
  public answers:any;
  @Input('answers') public answers_user;
  constructor() {

  }
  
  ngOnInit() {
    this.answers = this.answers_user.answers;
  }
  ngAfterViewInit()	{
    
  }
  ngAfterViewChecked(){
    
  }

  toggle_answer() {
    if(this.state_answer == "Ver") {
      this.state_answer = "Ocultar";
      this.state_answer_icon = "arrow_drop_up";
    } else {
      this.state_answer = "Ver";
      this.state_answer_icon = "arrow_drop_down";
    }
  }

}
