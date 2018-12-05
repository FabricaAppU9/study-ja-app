/**
 * @ROTEAMENTO RAIZ MODULO - CARREGA AS PRINCIPAIS ROTAS
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './admin/login/login.component';
import { LandingComponent } from './visitor/landing/landing.component';

const appRoutes: Routes = [
    {
        // 2. ROTA PARA ACESSO AO LOGIN DO ADMINISTRADOR
        path: 'admin',
        component: LoginComponent
    },
    {
        // 2. ROTA PARA ACESSO AO LOGIN DO USUARIO
        path: 'signin',
        component: SigninComponent
    },
    {
        // 2. ROTA PARA ACESSO AO CADASTRO DO USUARIO
        path: 'signup',
        component: SignupComponent
    },
    {
        // 3. ROTA PARA ACESSO AO HOME DO VISITANTE
        path: 'landing',
        component: LandingComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
