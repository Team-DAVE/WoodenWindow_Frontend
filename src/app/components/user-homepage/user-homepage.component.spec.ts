import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { asyncData } from '../../testing/async-observable-helpers';
import { UserHomepageComponent } from './user-homepage.component';
import { User } from '../../models/users';
import { Profile } from 'src/app/models/profile';
import { Business } from 'src/app/models/business';
import { UserHomepageService } from 'src/app/services/user-homepage.service';


//////////  Tests  ////////////////////

describe('UserHomepageComponent', () => {
  let component: UserHomepageComponent;
  let expectedUser: User;
  let expectedProfiles: Profile[];
  let expectedBusinesss: Business[];
  let router: any;
  let profileServiceSpy: any;
  let businessServiceSpy: any;
  let userHomepageServiceSpy: any;

  beforeEach((done: DoneFn) => {
    expectedUser = {
      userId: 1,
      email: 'testone@host.com',
      firstName: 'Test',
      lastName: 'One',
      password: 'password'
    }

    expectedProfiles = [
      { profileId: 42,
        profileName: 'Farmer',
        resume: 'Can drive in a straight line',
        userId: 1
      }
    ];

    expectedBusinesss = [{
      businessId: 1,
      name: 'Farmer School',
      address: 'Place',
      mission: 'Teach you to drive in a straight line.',
      summary: 'Nothing teaches like Farmer School'
    }];

    const activatedRoute = new ActivatedRouteStub({ id: expectedUser.userId });
    router = jasmine.createSpyObj('router', ['navigate']);

    profileServiceSpy = jasmine.createSpyObj('ProfileService', ['getProfilesByUserId']);
    profileServiceSpy.getProfilesByUserId.and.returnValue(asyncData(expectedProfiles));

    businessServiceSpy = jasmine.createSpyObj('BusinessService', ['getBusinessesByUserId']);
    businessServiceSpy.getBusinessesByUserId.and.returnValue(expectedBusinesss);

    userHomepageServiceSpy = new UserHomepageService();

    component = new UserHomepageComponent(activatedRoute as any, profileServiceSpy, businessServiceSpy, userHomepageServiceSpy);
    component.ngOnInit();

    // OnInit calls HDS.getHero; wait for it to get the fake hero
    profileServiceSpy.getProfilesByUserId.calls.first().returnValue.subscribe(done);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the profile retrieved from the service', () => {
    expect(component.userProfiles).toBe(expectedProfiles);
  });

});

