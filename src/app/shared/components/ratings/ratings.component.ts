import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'ratings',
    templateUrl: 'ratings.component.html',
    styleUrls: ['ratings.component.scss']
})

export class RatingsComponents{

    starActive: number[] = [1,2,3,4,5];

    isActive: boolean = false;
    valor: string = "star_border";

    ratingClick(starSelecet: string){
        this.isActive = !this.isActive; // Altera o valor da variavel

        if(this.isActive == true){
            this.valor = "star";
            console.log(starSelecet);
        }else{
            this.valor = "star_border";
            console.log(starSelecet);
        }
    }

}