import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { User } from 'src/app/models/users';
import { Profile } from 'src/app/models/profile';
import { Business } from 'src/app/models/business';
import { ProfileService } from 'src/app/services/profile.service';
import { BusinessService } from '../../services/business.service';
import { UserHomepageService } from 'src/app/services/user-homepage.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  userSideNavabarSelection = 'newsfeed';
  currentUser: User;
  currentUserId: number;
  userProfiles: Profile[];
  userBusinesses: Business[];

  constructor(private route: ActivatedRoute, private profileService: ProfileService,
              private businessService: BusinessService, private userHomePageSource: UserHomepageService) {
                this.userHomePageSource.newProfileAdded$.subscribe(
                  profile => {
                    this.userProfiles.push(profile);
                  }
                );
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentUserId = +params.get('userId');
    });
    this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
    this.profileService.getProfilesByUserId(this.currentUserId).subscribe(
      response => {
        console.log(response);
        this.userProfiles = response;
      }
    );
    this.userBusinesses = this.businessService.getBusinessesByUserId(this.currentUserId);
  }

  setUserSideNavbarSelection(newSelection: string): void {
    this.userSideNavabarSelection = newSelection;
  }
}
