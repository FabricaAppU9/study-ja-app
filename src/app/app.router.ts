// Import do Routes
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Imports do components roteados
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { ViewpostComponent } from './home/post/viewpost/viewpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './home/signin/signin.component';

const APP_ROUTES: Routes = [
  { 
    path: '', 
    component: SignInComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
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