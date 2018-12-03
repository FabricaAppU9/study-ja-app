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
* 3. COMPONENTS DA APLICAÇÃO 
*/
import { SignupComponent } from './signup/signup.component';

/*
* 4. MODULOS DA APLICAÇÃO 
*/
import { HomeModule } from "./home/home.module";
import { ProfileModule } from "./profile/profile.module";
import { SigninModule } from "./signin/signin.module";

/*
* 5. MODULO DE TERCEIROS
*/
import { MaterializeModule } from 'angular2-materialize';
import { HeaderModule } from "./shared/components/header/header.module";


@NgModule({
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        UserRoutingModule,

        // 4. MODULO DA APLICAÇÃO
        HeaderModule,
        HomeModule,
        ProfileModule,
        RouterModule,
        SigninModule,

        // 5. MODULOS DE TERCEIROS
        MaterializeModule
    ],
    declarations: [ 
        SignupComponent,
    ],
    exports: [ ],
    providers: [ ]
})

export class UserModule{}