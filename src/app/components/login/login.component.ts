import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit{
    loginForm: FormGroup;

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.initForm();
    }

    /*
        onLogin is a method that is called after a click or submit event in the login form. It uses the user service to make
        a request to the backend API. The API returns a user if authentication succeeds. The method checks the response for
        a user. IF a user is returned then authentication passed and the user/client is routed to the user homepage. And the
        retuned user is added to localStorage to provide session tracking. If authentication fails no user is returned and the
        user/client is routed back to the login page with and error.
    */
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
                    this.router.navigate(['/user/' + response.userId]);
                } else {
                    alert('Username or password is incorrect. Please try again.');
                    localStorage.setItem('userInfo', null);
                    this.router.navigate(['/login']);
                }
            }
        );
    }

    // This initializes the form on the template to take in a users email and password.
    private initForm(): void {
        this.loginForm = new FormGroup({

            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)

        });
    }
}
