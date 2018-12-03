import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";

import { MaterializeModule } from 'angular2-materialize';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
        //MaterializeModule
    ],
    imports: [
        CommonModule
    ]
})

export class HeaderModule{

}