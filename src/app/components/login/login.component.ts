import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    constructor(
        private userService: UserService,
        private router: Router
        ){
    }

    ngOnInit(): void {
        this.initForm();
    }

    onLogin(): void {
        console.log(this.loginForm.value);
        const form = JSON.stringify(this.loginForm.value);
        console.log(form);
        this.userService.login(form).subscribe(
            response => {
                console.log('success');
                if (response != null) {
                    console.log('Before local storage: ');
                    localStorage.setItem('userInfo', JSON.stringify(response));
                    console.log('After local storage');
                    this.router.navigate(['/user/' + response.userId])
                    }
                    else {
                    alert('Username or password is incorrect. Please try again');
                    localStorage.setItem('userInfo', null);
                    this.router.navigate(['/login'])
                    }
            }
        );
    }

    private initForm(): void {
        this.loginForm = new FormGroup({

            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)

        });
    }
}