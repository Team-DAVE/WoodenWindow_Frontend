import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { UserProfileComponent } from './user-profile.component';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { Profile } from 'src/app/models/profile';
import { mockProfiles } from '../../../testing/mock-profiles';
import { of, Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export class ProfileServiceStub {
  public get(profileId: number): Observable<Profile> {
    return of(mockProfiles[profileId - 1]);
  }
}

describe('UserProfileComponent', () => {
  // function navigateByProfileId(profileId: number): void {
  //   routeStub.setParamMap({ profileId });
  // }
  const mockActivatedRoute = {
    snapshot: {
      params: {
        profileId: 1
      }
    }
  };

  class MockProfileService {

  }
  let component: UserProfileComponent;
  const fakeProfiles: Profile[] = mockProfiles;
  let fixture: ComponentFixture<UserProfileComponent>;
  // let route: ActivatedRoute;
  // let service: ProfileService;
  // let routeStub: ActivatedRouteStub;
  // let testComponent: UserProfileComponent;
  let myService: ProfileService;

  beforeEach(async(() => {
    // const fakeService = {
    //   getProfile(profileId: number): Observable<Profile> {
    //     const profile = fakeProfiles.find(p => p.profileId === profileId);

    //     return of(profile);
    //   },
    // } as Partial<ProfileService>;

    // routeStub = new ActivatedRouteStub();

    // testComponent = new UserProfileComponent(route, service);

    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      // imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute},
        { provide: ProfileService, useValue: myService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // const [expectedProfile] = fakeProfiles;

    // navigateByProfileId(expectedProfile.profileId);
    // fixture.detectChanges();
    console.log('before test');
    expect(component).toBeTruthy();
  });
});

// describe('UserProfileComponent', () => {
//   let component: UserProfileComponent;
//   let fixture: ComponentFixture<UserProfileComponent>;
//   let teste: UserProfileComponent;
//   let route: ActivatedRoute;
//   let myService: ProfileService;

//   beforeEach(async(() => {
//       teste = new UserProfileComponent(route, myService);
//       TestBed.configureTestingModule({
//       declarations: [ UserProfileComponent ],
//       imports: [
//           RouterTestingModule,
//           HttpClientModule
//       ],
//       providers: [ProfileService]
//       })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//       fixture = TestBed.createComponent(UserProfileComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//   });

//   it('should create', () => {
//       expect(component).toBeTruthy();
//   });

//   });
