// Import do Routes
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Imports do components roteados
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './users/home/home.component';
import { PostComponent } from './users/home/post/post.component';
import { ViewpostComponent } from './users/home/post/viewpost/viewpost.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { SignInComponent } from './users/home/signin/signin.component';

const APP_ROUTES: Routes = [
  { 
    path: '', 
    component: SignInComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'post/:id', 
    component: PostComponent 
  },
  { 
    path: 'reader', 
    component: ViewpostComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent
  }
];

export const router: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);