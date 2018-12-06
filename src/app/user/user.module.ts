/**
 * @USER MODULO - CARREGA TODAS AS FUNCIONALIDADES DO USUARIO
 * 
 * 1. MODULO DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/*
* 2. MODULO DE ROTEAMENTO DAS FUNCIONALIDADES DO USUARIO
*/
import { UserRoutingModule } from "./user.routing.module";

/*
* 4. MODULOS DA APLICAÇÃO 
*/
import { HomeModule } from "./home/home.module";
import { SigninModule } from "./signin/signin.module";
import { SignupModule } from "./signup/signup.module";

@NgModule({
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        RouterModule,

        // 2. MODULO DE ROTEAMENTO DAS FUNCIONALIDADES DO USUARIO
        UserRoutingModule,

        // 4. MODULO DA APLICAÇÃO
        HomeModule,
        SigninModule,
        SignupModule
    ],
    declarations: [],
    exports: [ ],
    providers: [ ]
})

export class UserModule{}