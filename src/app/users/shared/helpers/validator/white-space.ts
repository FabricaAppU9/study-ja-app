import { AbstractControl } from "@angular/forms";

export function ValidateWhiteSpace(control: AbstractControl) {
    //Verifica 
    if(control.value == null) return {isError: true};
    if(control.value.trim() === '') return { isError: true};

    return null;
}                                                                          