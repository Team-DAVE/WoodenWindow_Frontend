import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Profile } from '../models/profile';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root'
})
export class UserHomepageService {

  constructor() { }

  // Observable string sources
  private newProfileAddedSource = new Subject<Profile>();
  private newBusinessAddedSource = new Subject<Business>();

  // Observable string streams
  newProfileAdded$ = this.newProfileAddedSource.asObservable();
  newBusinessAdded$ = this.newBusinessAddedSource.asObservable();

  // Service message commands
  addNewProfileToUserProfiles(profile: Profile): void {
    this.newProfileAddedSource.next(profile);
  }

  addNewBusinessToUserBusinesses(business: Business): void {
    this.newBusinessAddedSource.next(business);
  }
}
