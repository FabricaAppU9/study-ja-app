/**
 * @NAVBAR MODULO - CARREGA A NAVBAR PADRÃO DA APLICAÇÃO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { NavbarComponent } from "./navbar.component";

/*
* 3. MODULO DE TERCEIROS
*/
import { MaterializeModule } from "angular2-materialize";

@NgModule({
    declarations: [
        // 2. COMPONENTES DA APLICAÇÃO
        NavbarComponent
    ],
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,

        // 3. MODULO DE TERCEIROS
        MaterializeModule
    ],
    exports: [
        // 2. COMPONENTES DA APLICAÇÃO
        NavbarComponent
    ],
    providers: []
})

export class NavbarModule{}