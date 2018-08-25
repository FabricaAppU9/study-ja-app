import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/helpers/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [ SignInComponent, SignupComponent ],
    imports: [ 
        ReactiveFormsModule, 
        CommonModule,
        
        VMessageModule
    ]
})

export class HomeModule{}