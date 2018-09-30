import { NgModule } from "@angular/core";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsDetailComponent } from "./posts-detail/posts-detail.component";

@NgModule({
    imports: [],
    exports: [
        PostsDetailComponent,
        PostsListComponent
    ],
    declarations: [
        PostsDetailComponent,
        PostsListComponent
    ]
})

export class PostsModule{}