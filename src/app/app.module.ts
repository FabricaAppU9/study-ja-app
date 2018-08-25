import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';

import { router } from './app.router';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './users/home/home.component';

import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './users/header/header.component';
import { FooterComponent } from './users/shared/layout/footer/footer.component';

import { ViewpostComponent } from './users/home/post/viewpost/viewpost.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';

import { PostsComponent } from './users/posts/posts.component';

import { DashboardModule } from './users/dashboard/dashboard.module';
import { PostsModule } from './users/posts/posts.module';
import { HomeModule } from './users/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ViewpostComponent,
    DashboardComponent,
    PostsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule,

    DashboardModule,
    PostsModule,
    HomeModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
