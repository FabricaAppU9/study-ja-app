import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Signup } from "../../shared/core/signup/signup.service";
import { Router } from "@angular/router";



@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private register: Signup,
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            from: ['', Validators.required],
            cpf: ['', Validators.required],
        });
    }

    onClickRegister($event) {
        $event.preventDefault();
        console.log("clicado");
        const email = this.loginForm.get('email').value;
        console.log(email);
        const name = this.loginForm.get('name').value;
        console.log(name);
        const lastName = this.loginForm.get('lastName').value;
        console.log(lastName);
        const genre = (document.getElementById('selectGenre') as HTMLInputElement).value;
        console.log(genre);
        const from = this.loginForm.get('from').value;
        console.log(from);
        const date = (document.getElementById('data') as HTMLInputElement).value;
        console.log(this.reverseString(date));
        const cpf = this.loginForm.get('cpf').value;
        console.log(cpf);
        const institute = (document.getElementById('selectInstitute') as HTMLInputElement).value;
        console.log(institute);
        const password = this.loginForm.get('password').value;
        console.log(password);
        this.register
            .signup(email, name, lastName, genre, from, cpf, institute, this.reverseString(date), password)
            .subscribe(() => {
                this.router.navigate(["signin"]);
            }, err => {
                console.log(err);
                this.loginForm.reset();
            });
    }

    reverseString(someString: String) {
        let array = someString.split("-");
        return array.reverse().join().replace(/,/g, "-");
    }
}