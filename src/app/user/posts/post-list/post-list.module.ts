/**
 * @POST-LIST MODULO - CARREGA TODAS AS FUNCIONALIDADES DA LISTA DE POSTS
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { PostListComponent } from "./post-list.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { PostsPhotoComponent } from "./post-card/posts-photo/posts-photo.component";
import { PostsDescriptionComponent } from "./post-card/posts-description/posts-description.component";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";

/*
* 3. MODULOS DE TERCEIROS
*/
import { FlickityModule } from "ngx-flickity";

/*
* 4. SERVIÇOS DA APLICAÇÃO
*/
import { PostListService } from "./post-list.service";

@NgModule({
    declarations: [
        // 2. COMPONENTES DA APLICAÇÃO
        PostListComponent,
        PostCardComponent,
        PostsPhotoComponent,
        PostsDescriptionComponent,
        LoadingComponent
    ],
    imports: [
        // 1. MODULOS DO ANGULAR
        CommonModule,
        RouterModule,

        // 3. MODULOS DE TERCEIROS
        FlickityModule

    ],
    exports:[
        // 2. COMPONENTES DA APLICAÇÃO
        PostListComponent,
        PostCardComponent
    ],
    providers: [
        // 4. SERVIÇOS DA APLICAÇÃO
        PostListService
    ]
})

export class PostListModule{}