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
import { PostComponent } from './home/post/post.component';
import { SuggestionCarrouselComponent } from './suggestion-carrousel/suggestion-carrousel.component';
import { ViewpostComponent } from './home/post/viewpost/viewpost.component';
import { MenuComponent } from './header/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    PostComponent,
    SuggestionCarrouselComponent,
    ViewpostComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
