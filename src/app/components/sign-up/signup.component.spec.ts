import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignUp Component', () => {
  let component: SignupComponent;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const loginServiceSpy = jasmine.createSpyObj('UserService', ['addUser']);
  const testUserData = {
    email: 'testone@host.com',
    firstName: 'Test',
    lastName: 'One',
    password: 'password'
  };

  beforeEach(async(() => {
    component = new SignupComponent(routerSpy, loginServiceSpy);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    component.ngOnInit();
    expect(component.userForm).toBeDefined();
    expect(component.userForm.invalid).toBeTruthy();
  });
});
