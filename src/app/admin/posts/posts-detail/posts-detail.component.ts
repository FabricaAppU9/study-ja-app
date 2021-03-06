import { Component, EventEmitter } from "@angular/core";
import { MaterializeAction } from "angular2-materialize";


@Component({
    selector: 'post-detail',
    templateUrl: './posts-detail.component.html',
    styleUrls: ['./posts-detail.component.scss']
})

export class PostsDetailComponent{
    modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
        this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
        this.modalActions.emit({action:"modal",params:['close']});
    }
}