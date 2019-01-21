/**
 * @POST MODULO - CARREGA TODAS AS FUNCIONALIDADES DE UM POST
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { PostsComponent } from "./posts.component";
import { PostTextComponent } from "./post-text/post-text.component";
import { PostComponent } from "./post/post.component";

/*
* 3. MODULOS DA APLICAÇÃO
*/
import { PostCommentsModule } from "./post-comments/post-comments.module";
import { PostListModule } from "./post-list/post-list.module";
import { NavbarModule } from "../shared/components/navbar/navbar.module";
import { PostsRoutingModule } from "./posts.routing.module";
import { NotfoundComponent } from "../../shared/errors/not-found/not-found.component";

/*
* 4. SERVIÇOS DA APLICAÇÃO
*/
import { PostService } from "./post/post.service";

@NgModule({
    declarations: [
        // 2. COMPONENTES DA APLICAÇÃO
        PostComponent,
        PostsComponent,
        PostTextComponent,

        NotfoundComponent
    ],
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        RouterModule,
        HttpModule,

        // 3. MODULOS DA APLICAÇÃO
        PostCommentsModule,
        PostListModule,
        NavbarModule,

        PostsRoutingModule
    ],
    exports: [],
    providers: [
        // 4. SERVIÇOS DA APLICAÇÃO
        PostService
    ]
})

export class PostsModule{}