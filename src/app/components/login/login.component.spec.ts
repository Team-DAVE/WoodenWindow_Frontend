import { async } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const loginServiceSpy = jasmine.createSpyObj('UserService', ['login']);
  const testUserData = {
    userId: 1,
    email: 'testone@host.com',
    firstName: 'Test',
    lastName: 'One',
    password: 'password'
  };

  beforeEach(async(() => {
    component = new LoginComponent(routerSpy, loginServiceSpy);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    component.ngOnInit();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });
});
