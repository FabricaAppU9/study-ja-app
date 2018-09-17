import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Imports dos modulos
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { PostListService } from './post-list/post-list.service';
import { UserRoutingModule } from '../user.routing.module';
import { RatingsComponents } from '../../shared/components/ratings/ratings.component';
import { LikesComponent } from '../../shared/components/likes/likes.component';
import { PostService } from './post/post.service';
import { PostTextComponent } from './post-text/post-text.component';

@NgModule({
    declarations:[
        HomeComponent,
        PostComponent,
        PostListComponent,
        HeaderComponent,
        RatingsComponents,
        LikesComponent,
        PostTextComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        UserRoutingModule
    ],
    exports:[
        
    ],
    providers: [
        PostListService,
        PostService
    ]
})

export class HomeModule{}