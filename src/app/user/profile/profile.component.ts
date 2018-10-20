import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent{

    profileName: string;

    constructor(private route: ActivatedRoute){
        
    }

    ngOnInit(){
        if(this.route.snapshot.params['userName'] == null){
            console.log("Voce esta no seu perfil");
        }else{
            console.log("Voce esta no perfil do(a): " + this.route.snapshot.params['userName']);
        }   
    }
}