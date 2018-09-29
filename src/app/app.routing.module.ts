import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AdminComponent } from './admin/admin.component';

import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { NotfoundComponent } from './shared/errors/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './admin/login/login.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        component: LoginComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
