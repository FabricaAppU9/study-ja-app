import { Component, EventEmitter } from "@angular/core";
import { MaterializeAction } from "angular2-materialize";

@Component({ 
    selector: 'users-create-admin', 
    templateUrl: './users-create-admin.component.html', 
})

export class UsersCreateAdminComponent{
    modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
        this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
        this.modalActions.emit({action:"modal",params:['close']});
    }
}