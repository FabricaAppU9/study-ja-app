import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { HeaderModule } from "../shared/components/header/header.module";

@NgModule({
    declarations:[
        ProfileComponent
    ],
    imports:[
        HeaderModule
    ],
    exports: [],
    providers: []
})

export class ProfileModule{}