import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Modulo de roteamento
import { UserRoutingModule } from "./user.routing.module";

// Modulos da aplicação
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// Import Modulos de funcionalidade
import { HomeModule } from "./home/home.module";
import { ProfileModule } from "./profile/profile.module";


@NgModule({
    imports: [ 
        CommonModule,
        UserRoutingModule,
        HomeModule,
        ProfileModule
    ],
    declarations: [ 
        SigninComponent,
        SignupComponent,
    ],
    exports: [
        
    ],
    providers: [

    ]
})

export class UserModule{}