import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    QuillModule,
    FormsModule
  ],
  declarations: [PostEditorComponent]
})
export class PostEditorModule { }
