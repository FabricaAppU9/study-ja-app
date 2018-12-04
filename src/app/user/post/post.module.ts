/**
 * @POST MODULO - CARREGA TODAS AS FUNCIONALIDADES DE UM POST
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { PostComponent } from "./post.component";
import { PostTextComponent } from "./post-text/post-text.component";

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { PostCommentsModule } from "./post-comments/post-comments.module";
import { PostListModule } from "./post-list/post-list.module";
import { NavbarModule } from "../shared/components/navbar/navbar.module";

@NgModule({
    declarations: [
        // 2. COMPONENTES DA APLICAÇÃO
        PostComponent,
        PostTextComponent
    ],
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        RouterModule,

        // 3. MODULOS DA APLICAÇÃO
        PostCommentsModule,
        PostListModule,
        NavbarModule
    ],
    exports: [],
    providers: []
})

export class PostModule{}