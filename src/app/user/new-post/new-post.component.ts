import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  private type_register:string = 'article';
  constructor() { }

  ngOnInit() {
   
  }

  submit() {

  }

  select_register(event) {
    this.type_register = event.target.value;
  }

}
