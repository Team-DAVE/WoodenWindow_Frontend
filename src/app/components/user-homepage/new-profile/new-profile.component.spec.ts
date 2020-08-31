import { asyncData } from '../../../testing/async-observable-helpers';
import { NewProfileComponent } from './new-profile.component';
import { Profile } from '../../../models/profile';
import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { ProfileService } from 'src/app/services/profile.service';
import { UserHomepageService } from 'src/app/services/user-homepage.service';

//////////  Tests  ////////////////////

describe('NewProfileComponent', () => {
  let component: NewProfileComponent;
  let fixture: ComponentFixture<NewProfileComponent>;
  let expectedProfile: Profile;
  let profileServiceSpy: any;
  let addProfileSpy: any;
  let userHomepageServiceSpy: any;

  beforeEach(() => {
    expectedProfile = {
      profileId: 42,
      profileName: 'Farmer',
      resume: 'Can drive in a straight line',
      userId: 1
    };

    profileServiceSpy = jasmine.createSpyObj('ProfileService', ['addProfile']);
    addProfileSpy = profileServiceSpy.addProfile.and.returnValue(asyncData(expectedProfile));

    userHomepageServiceSpy = jasmine.createSpyObj('UserHomepageService', ['addNewProfileToUserProfiles']);

    TestBed.configureTestingModule({
      declarations: [NewProfileComponent],
      providers: [
        {provide: ProfileService, useValue: profileServiceSpy},
        {provide: UserHomepageService, userValue: userHomepageServiceSpy}
      ]
    });

    fixture = TestBed.createComponent(NewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addNewProfileToUserProfiles', () => {
    const componentSpy = spyOn(component, 'addProfile').and.callThrough();
    component.addProfile();
    expect(componentSpy).toHaveBeenCalled();
  });

});
