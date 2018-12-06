/**
 * @PROFILE MODULO - CARREGA TODAS AS FUNCIONALIDADES DO PERFIL DO USUARIO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { ProfileComponent } from "./profile.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { ProfileAccessDataComponent } from "./profile-settings/profile-access-data/profile-access-data.component";

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { NavbarModule } from "../shared/components/navbar/navbar.module";

/*
* 4. DIRETIVAS DA APLICAÇÃO
*/
import { LikeLabelDirective } from "../shared/directives/like-label.directive";
import { ProfileRoutingModule } from "./profile.routing.module";

@NgModule({
    declarations:[
        // 2. COMPONENTES DA APLICAÇÃO
        ProfileComponent,
        ProfileSettingsComponent,
        ProfileAccessDataComponent,

        // 4. DIRETIVAS DA APLICAÇÃO
        LikeLabelDirective
    ],
    imports:[
        // 1. MODULOS DO ANGULAR
        CommonModule,
        RouterModule,

        // 3. MODULOS DA APLICAÇÃO
        NavbarModule,
        ProfileRoutingModule
    ],
    exports: [],
    providers: []
})

export class ProfileModule{}