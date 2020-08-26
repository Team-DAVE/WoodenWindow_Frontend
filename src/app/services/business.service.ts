import { Injectable } from '@angular/core';

import { Business } from '../models/business';
import { UserBusinessJoin } from '../models/userBusinessJoin';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  bussinesses: Business[];
  join: UserBusinessJoin[];

  constructor() {
    this.bussinesses = [
      {
        businessId: 1,
        name: 'Business One',
        address: 'Place',
        mission: 'Mission',
        summary: 'Summary'
      },
      {
        businessId: 2,
        name: 'Business Two',
        address: 'Place',
        mission: 'Mission',
        summary: 'Summary'
      },
      {
        businessId: 3,
        name: 'Business Three',
        address: 'Place',
        mission: 'Mission',
        summary: 'Summary'
      },
      {
        businessId: 4,
        name: 'Business Four',
        address: 'Place',
        mission: 'Mission',
        summary: 'Summary'
      },
      {
        businessId: 5,
        name: 'Business Five',
        address: 'Place',
        mission: 'Mission',
        summary: 'Summary'
      },
    ];
    this.join = [
      {
        userId: 1,
        businessId: 1
      },
      {
        userId: 1,
        businessId: 2
      },
      {
        userId: 1,
        businessId: 3
      },
      {
        userId: 2,
        businessId: 3
      },
      {
        userId: 2,
        businessId: 4
      },
      {
        userId: 3,
        businessId: 5
      },
    ];
  }

  getBusinessesByUserId(userId: number): Business[] {
    let businessIds: UserBusinessJoin[];
    businessIds = this.join.filter( entry => entry.userId === userId);
    let userBusinesses: Business[] = [];
    for ( let join of businessIds) {
      let business = this.bussinesses.find( x => x.businessId === join.businessId);
      userBusinesses.push(business);
    }
    return userBusinesses;
  }

  getBusiness(businessId: number): Business {
    return this.bussinesses.find( x => x.businessId === businessId);
  }
}
