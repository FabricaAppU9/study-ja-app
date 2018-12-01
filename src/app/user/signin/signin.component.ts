import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from "../../shared/core/auth/auth.service";
import { PlatformDetectorService } from "../../shared/core/plataform-detector/platform-detector.service";

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit{
    loginForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef;
    
    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
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
                        this.platformDetectorService.isPlatformBrowser() && 
                            this.emailInput.nativeElement.focus();
                    }
            );
    }
}