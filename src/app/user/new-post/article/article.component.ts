import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateWhiteSpace } from '../../shared/helpers/validator/white-space';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private article:FormGroup;

  @Input('type') type:string;
  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.article = this.form.group({
      title: [null, [ValidateWhiteSpace, Validators.required]],
      type: ["article"]
    });
  }

  submit() {
    console.log(this.article);
  }

}
