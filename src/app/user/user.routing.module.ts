/**
 * @ROTEAMENTO FILHO MODULO - CARREGA AS ROTAS DO USUARIO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileSettingsComponent } from "./profile/profile-settings/profile-settings.component";
//import { PostComponent } from "./post/posts.component";
//import { PostTextComponent } from "./post/post-text/post-text.component";

const userRoutes: Routes = [
    {
        // 2. HOME - CARREGA TODOS OS RESUMOS
        path: 'home',
        component: HomeComponent
    },
    /*
    {
        // 2. POST - CARREGA UM POST SELECIONADO
        path: 'post/:id',
        component: PostComponent
    },
    {
        // 2. VIEWER - CARREGA O CONTEUDO DO POST (TEXTO)
        path: 'viewer/:id/:titulo',
        component: PostTextComponent
    },*/
    /*
    {
        // 2. PROFILE
        path: 'profile',
        children: [
            {
                // 2. PROFILE - REDIRECIONA PARA O PERFIL PESSOAL DO USUARIO
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-profile'
            },
            {
                // 2. PROFILE/MY-PROFILE - PERFIL PESSOAL DO USUARIO
                path: 'my-profile',
                component: ProfileComponent
            },
            {
                // 2. PROFILE/SETTINGS - REDIRECIONA PARA AS CONFIGURAÇÕES DO PERFIL
                path: 'my-profile/settings',
                component: ProfileSettingsComponent
            },
            {
                // 2. PROFILE/NOMEDEUSUARIO - REDIRECIONA PARA O PERFIL DE OUTRO USUARIO
                path: ':userName',
                component: ProfileComponent
            }
        ]
    }*/
]

@NgModule({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ]
})

export class UserRoutingModule{}