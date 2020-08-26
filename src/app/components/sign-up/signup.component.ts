import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signup-form',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']

})

export class SignupComponent implements OnInit{
    userForm: FormGroup;

    constructor(
        private userService: UserService,
        private router: Router
        ){

    }


    ngOnInit(): void {
        this.initForm();
    }

    onSubmit(): void {
        console.log(this.userForm.value);
        const form = JSON.stringify(this.userForm.value);
        console.log(form);
        this.userService.addUser(form).subscribe(
            response => {
                console.log('success');
                console.log('The response is ' + response);
                if (response === true) {
                    this.router.navigate(['/login'])
                    }
                    else {
                    alert('The email used already exists');
                    }
            }
        );
    }

    private initForm(): void {
        this.userForm = new FormGroup({

            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            firstName: new FormControl(null),
            lastName: new FormControl(null)


        });
    }
}
