import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* 
    Import dos components do projeto
*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
    {
        path: 'dashboard',
        component: AdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-dashboard'
            },
            {
                path: 'my-dashboard',
                component: DashboardComponent
            },
            {
                path: 'manage-posts',
                component: PostsComponent
            },
            {
                path: 'manage-users',
                component: UsersComponent
            }
        ]
    },

    /*
    {
        path: 'posts',
        component: PostsComponent,
    },
    */

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
