import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  private title:string  = "Título Original...";
  private style:object = {height: (window.innerHeight - 190)+'px'}
  private html_text = "<br>";
  private timer;
  private state = 'Salvo!';
  private state_style = "tag-state-save";
  constructor() {
    
  }

  ngOnInit() {
  }

  exibe() {
    console.log(this.html_text);
  }
  change(event) {
    this.state = "Salvando..."
    this.state_style = "tag-state-saving";
    if(this.timer === undefined){
      this.timer = setTimeout(() => {
        this.state = 'Salvo!';
        this.state_style = "tag-state-save";
        console.log(event)
      },2000);
    } else {
      this.timer = clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.state = 'Salvo!';
        this.state_style = "tag-state-save";
        console.log(event);

      },2000)
    }

    
  }
}
