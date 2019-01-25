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

/*
* 3. GUARDA DE ROTAS DA APLICAÇÃO
*/
import { AuthGuard } from './shared/core/auth/auth.guard';


const appRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'profile',
        loadChildren: './user/profile/profile.module#ProfileModule'
    },
    {
        path: 'post',
        loadChildren: './user/posts/posts.module#PostsModule'
    },
    {
        // 2. ROTA PARA ACESSO AO LOGIN DO ADMINISTRADOR
        path: 'admin',
        component: LoginComponent
    },
    {
        // 2. ROTA PARA ACESSO AO LOGIN DO USUARIO
        path: 'signin',
        component: SigninComponent,
        canActivate: [AuthGuard]
    },
    {
        // 2. ROTA PARA ACESSO AO CADASTRO DO USUARIO
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthGuard]
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
