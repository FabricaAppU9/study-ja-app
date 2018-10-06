import { NgModule } from "@angular/core";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsDetailComponent } from "./posts-detail/posts-detail.component";

import { MaterializeModule } from 'angular2-materialize';
import { PostsActionComponent } from "./posts-action/posts-action.component";
import { PostDisapprovedComponent } from "./posts-disapproved/posts-disapproved.component";

@NgModule({
    imports: [
        MaterializeModule
    ],
    exports: [
        PostsDetailComponent,
        PostsListComponent
    ],
    declarations: [
        PostsDetailComponent,
        PostsListComponent,
        PostsActionComponent,
        PostDisapprovedComponent
    ]
})

export class PostsModule{}