import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from '../home/post/post.component';
import { ReaderComponent } from './post/reader/reader.component';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostComponent,
    ReaderComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
