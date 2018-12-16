/**
 * @USER MODULO - CARREGA TODAS AS FUNCIONALIDADES DO USUARIO
 *
 * 1. MODULO DO ANGULAR
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
* 2. COMPONENTES DO ANGULAR
*/
import { AppComponent } from './app.component';

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

/*
* 4. MODULO DE ROTEAMENTO DAS FUNCIONALIDADES DO USUARIO
*/
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './shared/core/auth/auth.guard';
import { LandingComponent } from './visitor/landing/landing.component';

@NgModule({
  declarations: [
    // 2. COMPONENTES DO ANGULAR
    AppComponent,
    LandingComponent,
  ],
  imports: [
    // 1. MODULO DO ANGULAR
    BrowserModule,
    HttpClientModule,

    // 4. MODULO DE ROTEAMENTO DAS FUNCIONALIDADES DO USUARIO
    AppRoutingModule,

    // 3. MODULOS DA APLICAÇÃO
    AdminModule,
    UserModule
  ],
  bootstrap: [
    // 1. MODULO DO ANGULAR
    AppComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule { }
