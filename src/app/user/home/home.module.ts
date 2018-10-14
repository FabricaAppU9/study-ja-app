import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Imports dos modulos
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home.component';
import { PostListService } from './post-list/post-list.service';
import { UserRoutingModule } from '../user.routing.module';
import { RatingsComponents } from '../../shared/components/ratings/ratings.component';
//import { LikesComponent } from '../../shared/components/likes/likes.component';
import { PostService } from './post/post.service';
import { PostTextComponent } from './post-text/post-text.component';
import { CommentsModule } from './post/comments/comments.module';
import { HeaderModule } from '../shared/components/header/header.module';

@NgModule({
    declarations:[
        HomeComponent,
        PostComponent,
        PostListComponent,
        RatingsComponents,
        //LikesComponent,
        PostTextComponent,  
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        UserRoutingModule,
        //Modulos da aplicação
        CommentsModule,
        HeaderModule
    ],
    exports:[
        CommentsModule,
    ],
    providers: [
        PostListService,
        PostService
    ]
})

export class HomeModule{}