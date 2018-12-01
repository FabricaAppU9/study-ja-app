import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Modulo de roteamento
import { UserRoutingModule } from "./user.routing.module";

// Modulos da aplicação
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

// Import Modulos de funcionalidade
import { HomeModule } from "./home/home.module";
import { ProfileModule } from "./profile/profile.module";
import { VMessageModule } from "./shared/helpers/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

// Import Vendors
import { MaterializeModule } from 'angular2-materialize';


@NgModule({
    imports: [ 
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,

        MaterializeModule,
        
        HomeModule,
        ProfileModule,
        VMessageModule,
        RouterModule
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