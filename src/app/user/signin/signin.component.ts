import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../shared/core/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit{
    loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router 
    ){}
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onClickLogin(){
        const email = this.loginForm.get('email').value;
        const senha = this.loginForm.get('password').value;
        
        this.auth
            .authenticate(email, senha)
            .subscribe(
                () => this.router.navigate(['home']),
                    err => {
                        console.log("Falha na autenticação");
                        this.loginForm.reset();
                    }
            );
    }
}