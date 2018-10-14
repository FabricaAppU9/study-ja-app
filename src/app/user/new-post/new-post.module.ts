import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { ArticleComponent } from './article/article.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    HeaderModule
  ],
  declarations: [NewPostComponent, ArticleComponent, BookComponent],
  exports: [NewPostComponent]
})
export class NewPostModule { }
