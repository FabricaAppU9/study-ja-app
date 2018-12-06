import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from "./posts.component";
import { PostComponent } from "./post/post.component";
import { PostTextComponent } from "./post-text/post-text.component";
import { NotfoundComponent } from "../../shared/errors/not-found/not-found.component";

const postRoutes: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [
            {
                path: '',
                component: NotfoundComponent
            },
            {
                // 2. POST - CARREGA UM POST SELECIONADO
                path: ':id',
                component: PostComponent
            },
            {
                path: ':id/viewer',
                component: PostTextComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(postRoutes) ],
    exports: [ RouterModule ]
})

export class PostsRoutingModule{}