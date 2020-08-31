import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { environment } from 'src/environments/environment';



describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get profiles by userId', async(() => {
    const expectedProfiles = [
      { profileId: 42,
        profileName: 'Farmer',
        resume: 'Can drive in a straight line',
        userId: 1
      }
    ];

    service.getProfilesByUserId(1).subscribe(
      returnedProfiles => {
        expect(returnedProfiles.length).toEqual(1);
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}profile/user/1`);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedProfiles);
  }));

  it('should get profile by profileId', () => {
    const expectedProfile = {
        profileId: 42,
        profileName: 'Farmer',
        resume: 'Can drive in a straight line',
        userId: 1
      };

    service.getProfileByProfileId(42).subscribe(
      returnedProfile => {
        expect(returnedProfile.profileId).toEqual(42);
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}profile/42`);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedProfile);
  });

  it('should add profile', () => {
    const expectedProfile = {
        profileId: 42,
        profileName: 'Farmer',
        resume: 'Can drive in a straight line',
        userId: 1
      };

    service.addProfile(expectedProfile).subscribe(
      returnedProfile => {
        expect(returnedProfile.profileId).toEqual(42);
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}profile`);

    expect(req.request.method).toEqual('POST');

    req.flush(expectedProfile);
  });
});
