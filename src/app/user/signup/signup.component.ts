import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Signup } from "../../shared/core/signup/signup.service";
import { Router } from "@angular/router";
import { UserNotTakenValidatorService } from "../../shared/core/signup/user-not-taken.validator.service";



@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private register: Signup,
        private router: Router,
        private userNotTakenValidatorService: UserNotTakenValidatorService) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: [
                '', 
                [
                    Validators.required,
                    Validators.email
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ],
            name: ['', 
                [
                    Validators.required,
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
            lastName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
            from: ['', Validators.required],
            cpf: ['', Validators.required],
        });
    }

    onClickRegister($event) {
        $event.preventDefault();
        console.log("clicado");
        const email = this.signupForm.get('email').value;
        console.log(email);
        const name = this.signupForm.get('name').value;
        console.log(name);
        const lastName = this.signupForm.get('lastName').value;
        console.log(lastName);
        const genre = (document.getElementById('selectGenre') as HTMLInputElement).value;
        console.log(genre);
        const from = this.signupForm.get('from').value;
        console.log(from);
        const date = (document.getElementById('data') as HTMLInputElement).value;
        console.log(this.reverseString(date));
        const cpf = this.signupForm.get('cpf').value;
        console.log(cpf);
        const institute = (document.getElementById('selectInstitute') as HTMLInputElement).value;
        console.log(institute);
        const password = this.signupForm.get('password').value;
        console.log(password);
        this.register
            .signup(email, name, lastName, genre, from, cpf, institute, this.reverseString(date), password)
            .subscribe(() => {
                this.router.navigate(["signin"]);
            }, err => {
                console.log(err);
                this.signupForm.reset();
            });
    }

    reverseString(someString: String) {
        let array = someString.split("-");
        return array.reverse().join().replace(/,/g, "-");
    }
}