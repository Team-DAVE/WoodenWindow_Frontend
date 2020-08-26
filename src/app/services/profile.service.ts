import { Injectable } from '@angular/core';

import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles: Profile[];

  constructor() {
    this.profiles = [
      {
        profileId: 1,
        userId: 1,
        profileName: 'Coder',
        resume: 'This is the test resume number one',
      },
      {
        profileId: 2,
        userId: 1,
        profileName: 'Farmer',
        resume: 'This is the test resume number two',
      },
      {
        profileId: 3,
        userId: 1,
        profileName: 'Construction Worker',
        resume: 'This is the test resume number three',
      },
      {
        profileId: 4,
        userId: 2,
        profileName: 'Coder',
        resume: 'This is the test resume number four',
      },
      {
        profileId: 5,
        userId: 2,
        profileName: 'Farmer',
        resume: 'This is the test resume number five',
      },
      {
        profileId: 6,
        userId: 3,
        profileName: 'Coder',
        resume: 'This is the test resume number six',
      }
    ];
   }

  getUserProfiles(userId: number): Profile[] {
    return this.profiles.filter( profile => profile.userId === userId);
  }

  getProfile(profileId: number): Profile {
    return this.profiles.find( profile => profile.profileId === profileId);
  }
}
