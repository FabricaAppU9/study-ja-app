import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Signup } from "../../shared/core/signup/signup.service";
import { Router } from "@angular/router";



@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent{
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private register: Signup,
        private router: Router){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onClickRegister(){
        const email = this.loginForm.get('email').value;
        console.log(email);
        const name = this.loginForm.get('name').value;
        console.log(name);
        const lastName = this.loginForm.get('lastName').value;
        console.log(lastName);
        const genre = this.loginForm.get('genre').value;
        console.log(genre);
        const from = this.loginForm.get('from').value;
        console.log(from);
        const cpf = this.loginForm.get('cpf').value;
        console.log(cpf);
        const institute = this.loginForm.get('institute').value;
        console.log(institute);

        this.register
        .signup(email,name,lastName,genre,from,cpf,institute)
        .subscribe(()=>{
            this.router.navigate(["home"])
        },err =>{
            console.log(err);
            this.loginForm.reset();
        });
        }
}