import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

import { AppRoutingModule } from './app.routing.module';
//import { AdminComponent } from './admin/admin.component';
import { ErrorsModule } from './shared/errors/errors.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './admin/login/login.component';

import { MaterializeModule } from 'angular2-materialize';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    ErrorsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
