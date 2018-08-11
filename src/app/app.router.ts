// Import do Routes
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Imports do components roteados
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';
import { ViewpostComponent } from './home/post/viewpost/viewpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'post', component: PostComponent },
  { path: 'reader', component: ViewpostComponent },
  { path: 'dashboard', component: DashboardComponent}
];

export const router: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);