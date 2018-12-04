/**
 * @SIGNIN MODULO - CARREGA O COMPONENT PARA REALIZAR LOGIN
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { SigninComponent } from "./signin.component";

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { VMessageModule } from "../shared/helpers/vmessage/vmessage.module";

/*
* 4. SERVIÇOS DA APLICAÇÃO
*/
import { AuthService } from "../../shared/core/auth/auth.service";
import { PlatformDetectorService } from "../../shared/core/plataform-detector/platform-detector.service";
import { TokenService } from "../../shared/core/token/token.service";
import { UserService } from "../../shared/core/user/user.service";

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
    providers:[
        // 4. SERVIÇOS DA APLICAÇÃO
        AuthService,
        PlatformDetectorService,
        TokenService,
        UserService
    ]
})

export class SigninModule{}