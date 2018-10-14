import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateWhiteSpace } from '../../shared/helpers/validator/white-space';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  private book:FormGroup;

  @Input('type') type:string; 
  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.book = this.form.group({
      title: [null, [Validators.required, ValidateWhiteSpace]],
      publishing_company: [null, [Validators.required, ValidateWhiteSpace]],
      volume: [null, [Validators.required, ValidateWhiteSpace]],
      year: [null, [Validators.required, ValidateWhiteSpace] ],
      type: ['book']
    });
  }

}
