/**
 * @SIGNUP MODULO - CARREGA OS COMPONENTS PARA REALIZAR REGISTRO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { SignupComponent } from "./signup.component";

/*
* 3. SERVIÇOS DA APLICAÇÃO
*/

import { Signup } from "../../shared/core/signup/signup.service";

/*
* 4. IMPORT DE TERCEIROS
*/
import { MaterializeModule } from "angular2-materialize";

@NgModule({
    declarations: [
        // 2. COMPONENTS DA APLICAÇÃO
        SignupComponent
    ],
    imports: [
        //1. MODULOS DO ANGULAR
        ReactiveFormsModule,

        //4. IMPORT DE TERCEIROS
        MaterializeModule
    ],
    exports: [],
    providers: [
        // 3. SERVIÇOS DA APLICAÇÃO
        Signup
    ]
})

export class SignupModule{}