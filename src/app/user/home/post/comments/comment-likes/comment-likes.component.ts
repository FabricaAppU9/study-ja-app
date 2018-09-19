import { Component } from '@angular/core';

@Component({
    selector: 'app-comment-likes',
    templateUrl: './comment-likes.component.html',
    styleUrls: ['./comment-likes.component.scss']
})

export class CommentLikesComponent{

    constructor(){}

    isActiveLike: boolean = false;
    isActiveDislike: boolean = false;

    activeColor: string = '#1775fc';
    defaultColor: string = 'grey';

    onClickLike(value){
        console.log(value);
        if (value == 'like'){
            this.isActiveDislike = false;
            this.isActiveLike = !this.isActiveLike;
        }else if(value == 'dislike'){
            this.isActiveLike = false;
            this.isActiveDislike = !this.isActiveDislike;
        }else{
            console.log("Valor atribuido no evento click do component LIKES é inexistente");
            this.isActiveLike = false;
            this.isActiveDislike = false;
        }
    }
}