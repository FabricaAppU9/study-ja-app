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

@NgModule({
    declarations: [
        // 2. COMPONENTS DA APLICAÇÃO
        SignupComponent
    ],
    imports: [
        //1. MODULOS DO ANGULAR
        ReactiveFormsModule
    ],
    exports: [],
    providers: [
        // 3. SERVIÇOS DA APLICAÇÃO
        Signup
    ]
})

export class SignupModule{}