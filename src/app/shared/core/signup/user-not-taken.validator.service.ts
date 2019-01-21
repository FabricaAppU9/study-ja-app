import { Injectable } from "@angular/core";
import { Signup } from "./signup.service";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

@Injectable(
    
)

export class UserNotTakenValidatorService{

    constructor(private signupService: Signup){}

    checkUserNameTaken(){

        return(control: AbstractControl) => {
           return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(email => 
                    this.signupService.checkUserNameTaken(email)
                ))
                .pipe(map(isTaken => isTaken ? { emailTaken: true } : null))
                .pipe(first());
        }
    }
}