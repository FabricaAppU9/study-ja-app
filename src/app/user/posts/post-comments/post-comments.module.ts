/**
 * @POST-COMMENTS MODULO - CARREGA TODAS AS FUNCIONALIDADES DE POSTAGEM DE COMENTARIO
 * 
 * 1. MODULOS DO ANGULAR
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

/*
* 2. COMPONENTES DA APLICAÇÃO
*/
import { CommentsComponent } from './post-comments.component';
import { CommentSendComponent } from './comment-send/comment-send.component';
import { ThumbnailUserComponent } from './thumbnail-user/thumbnail-user.component';
import { CommentComponent } from './comment/comment.component';
import { CommentAnswerComponent } from './comment/comment-answer/comment-answer.component';
import { CommentLikesComponent } from "./comment-likes/comment-likes.component";
import { LoadButtonComponent } from "../../shared/components/load-button/load-button.component";

/*
* 3. SERVIÇOS DA APLICAÇÃO
*/
import { PostCommentsService } from "./post-comments.service";
import { MaterializeModule } from "angular2-materialize";

@NgModule({
    declarations:[
        // 2. COMPONENTES DA APLICAÇÃO
        CommentsComponent,
        CommentSendComponent,
        ThumbnailUserComponent,
        CommentComponent,
        CommentAnswerComponent,
        CommentLikesComponent,
        LoadButtonComponent
    ],
    imports:[
        // 1. MODULOS DO ANGULAR
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterializeModule
    ],
    exports:[
        // 2. COMPONENTES DA APLICAÇÃO
        CommentsComponent,
        CommentSendComponent,
        ThumbnailUserComponent,
        CommentComponent,
        CommentAnswerComponent,
        CommentLikesComponent
    ],
    providers:[
        // 3. Serviços da Aplicação
        PostCommentsService
    ]
})

export class PostCommentsModule{}