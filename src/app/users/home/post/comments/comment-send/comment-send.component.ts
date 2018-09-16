import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateWhiteSpace } from '../../../../shared/helpers/validator/white-space';

@Component({
  selector: 'app-comment-send',
  templateUrl: './comment-send.component.html',
  styleUrls: ['./comment-send.component.scss']
})
export class CommentSendComponent implements OnInit {

  private user = {
    name: "Sidney Novais",
    photo: "https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png"
  }

  private form: FormGroup;

  @Output() newComment = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      comment: [null, ValidateWhiteSpace]
    });
  }
  submit() {
    let user = this.user;
    let data = {
      text: this.form.value.comment,
      photo: user.photo,
      answers: []
    };
    this.form.reset();
    this.newComment.emit(data);
  }

}
