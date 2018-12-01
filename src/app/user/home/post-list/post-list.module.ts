import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostListComponent } from "./post-list.component";
import { PostCardComponent } from "./post-card/post-card.component";

import { FlickityModule } from "ngx-flickity";
import { UserRoutingModule } from "../../user.routing.module";
import { PostsPhotoComponent } from "./post-card/posts-photo/posts-photo.component";
import { PostsDescriptionComponent } from "./post-card/posts-description/posts-description.component";

@NgModule({
    declarations: [
        PostListComponent,
        PostCardComponent,
        PostsPhotoComponent,
        PostsDescriptionComponent
    ],
    imports: [
        CommonModule,
        FlickityModule,
        UserRoutingModule
    ],
    exports:[
        PostListComponent,
        PostCardComponent
    ]
})

export class PostListModule{}