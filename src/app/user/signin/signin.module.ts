/**
 * @SIGNIN MODULO - CARREGA O COMPONENT PARA REALIZAR LOGIN
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

/*
* 2. COMPONENTS DA APLICAÇÃO
*/
import { SigninComponent } from "./signin.component";

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { VMessageModule } from "../shared/helpers/vmessage/vmessage.module";

@NgModule({
    declarations: [
        // 2. COMPONENTES DA APLICAÇÃO
        SigninComponent
    ],
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        ReactiveFormsModule,

        // 3. MODULOS DA APLICAÇÃO
        VMessageModule
    ],
    exports: [ 
        // 1. MODULOS DA APLICAÇÃO
        ReactiveFormsModule 
    ],
    providers:[]
})

export class SigninModule{}