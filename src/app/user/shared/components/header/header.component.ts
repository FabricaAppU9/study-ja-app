import { Component, Input } from "@angular/core";


@Component({
    selector: 'navbar',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
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