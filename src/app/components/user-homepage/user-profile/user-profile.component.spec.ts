import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { asyncData } from '../../../testing/async-observable-helpers';
import { UserProfileComponent } from './user-profile.component';
import { Profile } from '../../../models/profile';

//////////  Tests  ////////////////////

describe('UserProfileComponent - no TestBed', () => {
  let component: UserProfileComponent;
  let expectedProfile: Profile;
  let profileServiceSpy: any;
  let router: any;

  beforeEach((done: DoneFn) => {
    expectedProfile = {
      profileId: 42,
      profileName: 'Farmer',
      resume: 'Can drive in a straight line',
      userId: 1
    };
    const activatedRoute = new ActivatedRouteStub({ id: expectedProfile.profileId });
    router = jasmine.createSpyObj('router', ['navigate']);

    profileServiceSpy = jasmine.createSpyObj('ProfileService', ['getProfileByProfileId']);
    profileServiceSpy.getProfileByProfileId.and.returnValue(asyncData(expectedProfile));

    component = new UserProfileComponent(activatedRoute as any, profileServiceSpy);
    component.ngOnInit();

    // OnInit calls HDS.getHero; wait for it to get the fake hero
    profileServiceSpy.getProfileByProfileId.calls.first().returnValue.subscribe(done);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the profile retrieved from the service', () => {
    expect(component.profile).toBe(expectedProfile);
  });

});

