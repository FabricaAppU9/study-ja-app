import { Component } from "@angular/core";

@Component({
    selector: 'profile-access-data',
    templateUrl: './profile-access-data.component.html'
})

export class ProfileAccessDataComponent{

    value: string;
    nome: String;
    ngOnInit(){
       this.value = "Rafael";
       this.nome = "Ronaldo";
    }
}