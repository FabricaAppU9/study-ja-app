import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./home/post/post.component";
import { PostTextComponent } from "./home/post-text/post-text.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { PostEditorComponent } from "./post-editor/post-editor.component";

const userRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'post/:id',
        component: PostComponent
    },
    {
        path: 'viewer/:id/:titulo',
        component: PostTextComponent
    },
    {
        path: 'new/post',
        component: NewPostComponent
    },
    {
        path: "post/:id/editor",
        component: PostEditorComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ]
})

export class UserRoutingModule{}