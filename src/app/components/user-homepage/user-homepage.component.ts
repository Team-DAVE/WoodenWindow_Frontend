import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/users';
import { Profile } from 'src/app/models/profile';
import { UserService } from '../../services/user.service';
import { ProfileService } from 'src/app/services/profile.service';
import { BusinessService } from '../../services/business.service';
import { Business } from 'src/app/models/business';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  userSideNavabarSelection = 'newsfeed';
  user: User;
  currentUserId: number;
  userProfiles: Profile[];
  userBusinesses: Business[];

  constructor(private route: ActivatedRoute, private userService: UserService, private profileService: ProfileService,
              private businessService: BusinessService) { }

  ngOnInit(): void {
    this.currentUserId = parseInt(this.route.snapshot.paramMap.get('userId'), 10);
    this.user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.user);
    this.userProfiles = this.profileService.getUserProfiles(this.currentUserId);
    this.userBusinesses = this.businessService.getBusinessesByUserId(this.currentUserId);
  }

  setUserSideNavbarSelection(newSelection: string): void {
    this.userSideNavabarSelection = newSelection;
  }
}
