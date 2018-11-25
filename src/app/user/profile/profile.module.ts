import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile.component";
import { HeaderModule } from "../shared/components/header/header.module";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProfileAccessDataComponent } from "./profile-settings/profile-access-data/profile-access-data.component";
import { LikeLabelDirective } from "../shared/directives/like-label.directive";

@NgModule({
    declarations:[
        ProfileComponent,
        ProfileSettingsComponent,
        ProfileAccessDataComponent,
        LikeLabelDirective
    ],
    imports:[
        HeaderModule,
        CommonModule,
        RouterModule
    ],
    exports: [],
    providers: []
})

export class ProfileModule{}