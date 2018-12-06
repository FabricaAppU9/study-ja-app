/**
 * @HOME MODULO - CARREGA A PAGINA PRINCIPAL DE POSTS
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { HomeComponent } from './home.component';
import { RatingsComponents } from '../../shared/components/ratings/ratings.component';

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { PostListModule } from '../posts/post-list/post-list.module';

@NgModule({
    declarations:[
        // 2. COMPONENTES DA APLICAÇÃO
        HomeComponent,
        RatingsComponents
    ],
    imports:[
        // 1. MODULOS DO ANGULAR
        CommonModule,
        HttpClientModule,
        RouterModule,

        // 3. MODULOS DA APLICAÇÃO
        NavbarModule,
        PostListModule
    ],
    exports:[

    ],
    providers: [

    ]
})

export class HomeModule{}