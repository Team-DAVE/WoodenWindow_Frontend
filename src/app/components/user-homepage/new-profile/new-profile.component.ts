import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/users';
import { UserHomepageService } from 'src/app/services/user-homepage.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {
  newProfileForm: FormGroup;
  currentUser: User;

  constructor(private profileService: ProfileService, private userHomepageService: UserHomepageService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
    this.initForm();
  }

  addProfile(): void {
    console.log(this.currentUser);
    const newProfileFormJSON = JSON.stringify(this.newProfileForm.value);
    console.log(newProfileFormJSON);
    this.profileService.addProfile(newProfileFormJSON).subscribe(
      response => {
        console.log(response);
        this.userHomepageService.addNewProfileToUserProfiles(response);
      }
    );
  }

  private initForm(): void {
    this.newProfileForm = new FormGroup({

        profileName: new FormControl(null, Validators.required),
        resume: new FormControl(null, Validators.required),
        user: new FormControl(this.currentUser)
    });
  }
}
