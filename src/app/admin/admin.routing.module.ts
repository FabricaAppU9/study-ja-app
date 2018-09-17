import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* 
    Import dos components do projeto
*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const adminRoutes: Routes = [
    {
        path: 'my-dashboard',
        component: DashboardComponent,
    },

    {
        path: 'posts',
        component: PostsComponent,
    },

    {
        path: 'users',
        component: UsersComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(adminRoutes) ],
    exports: [ RouterModule ]
})

export class AdminRoutesModule{}
