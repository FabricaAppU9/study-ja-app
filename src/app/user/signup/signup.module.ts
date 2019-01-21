/**
 * @SIGNUP MODULO - CARREGA OS COMPONENTS PARA REALIZAR REGISTRO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { SignupComponent } from "./signup.component";

/*
* 3. SERVIÇOS DA APLICAÇÃO
*/

import { Signup } from "../../shared/core/signup/signup.service";
import { UserNotTakenValidatorService } from "../../shared/core/signup/user-not-taken.validator.service";

/*
* 4. IMPORT DE TERCEIROS
*/
import { MaterializeModule } from "angular2-materialize";

// 5. IMPORTS DA APLICAÇÃO
import { VMessageModule } from "../shared/helpers/vmessage/vmessage.module";


@NgModule({
    declarations: [
        // 2. COMPONENTS DA APLICAÇÃO
        SignupComponent
    ],
    imports: [
        //1. MODULOS DO ANGULAR
        CommonModule,
        ReactiveFormsModule,
        //2. IMPORT DE TERCEIROS
        MaterializeModule,

        // 5. IMPORTS DA APLICAÇÃO
        VMessageModule
    ],
    exports: [],
    providers: [
        // 3. SERVIÇOS DA APLICAÇÃO
        Signup,
        UserNotTakenValidatorService
    ]
})

export class SignupModule { }