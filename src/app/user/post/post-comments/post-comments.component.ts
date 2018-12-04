import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class CommentsComponent implements OnInit {

  private comments = [
    {
      text: "Comentário teste 1!",
      photo: "https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png",
      answers: [
        {comment: 'Teste 1'},{comment: 'Teste 2'}
      ]
    },
    {
      text: "Comentário teste 2!",
      photo: "https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png",
      answers: []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  newComment(comment) {

    this.comments.push(comment);

  }

  

}
