import { NgModule } from "@angular/core";
import { PostTextComponent } from "./post-text.component";
import { CommonModule } from "@angular/common";
import { MaterializeModule } from "angular2-materialize";
import { PostCommentsModule } from "../post-comments/post-comments.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        PostTextComponent
    ],
    imports: [
        CommonModule,
        MaterializeModule,
        PostCommentsModule,
        RouterModule
    ],
    exports: []
})

export class PostTextModule {}