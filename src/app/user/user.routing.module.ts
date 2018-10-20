import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./home/post/post.component";
import { PostTextComponent } from "./home/post-text/post-text.component";
import { ProfileComponent } from "./profile/profile.component";

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
        path: 'profile',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-profile'
            },
            {
                path: 'my-profile',
                component: ProfileComponent
            },
            {
                path: ':userName',
                component: ProfileComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ]
})

export class UserRoutingModule{}