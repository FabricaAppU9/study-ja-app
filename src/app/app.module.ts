import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { router } from './app.router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { ViewpostComponent } from './home/post/viewpost/viewpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PostsComponent } from './posts/posts.component';


import { DashboardModule } from './dashboard/dashboard.module';
import { PostsModule } from './posts/posts.module';
import { HomeModule } from './home/home.module';

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
