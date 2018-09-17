import { Component, Input } from "@angular/core";


@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Input() headerColor: string;

    hasColor: boolean = true;
    montaStr: string;

    ngOnInit(){
        if (this.headerColor == 'transparent'){
            this.montaStr =  this.headerColor + " z-depth-0";
        }else{
            this.montaStr =  this.headerColor;
        }
    }

    getClasses(){
        return this.montaStr;
    }
}