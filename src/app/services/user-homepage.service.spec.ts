import { TestBed } from '@angular/core/testing';

import { UserHomepageService } from './user-homepage.service';

describe('UserHomepageService', () => {
  let service: UserHomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
