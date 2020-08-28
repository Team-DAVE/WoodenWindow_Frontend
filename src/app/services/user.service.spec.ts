import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';



describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log user in', async(() => {
    const mockUser = {
      email: 'testone@host.com',
      firstName: 'Test',
      lastName: 'One'
    };

    service.login('').subscribe(
      returnedUser => {
        expect(returnedUser.email).toEqual('testone@host.com');
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}user/login`);

    expect(req.request.method).toEqual('POST');

    req.flush(mockUser);
  }));

  it('should add user', async(() => {
    const mockSignupReturn = true;

    service.addUser('').subscribe(
      returnedBoolean => {
        console.log('subscribe value is' + returnedBoolean.valueOf());
        expect(returnedBoolean).toEqual(true);
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}user`);

    expect(req.request.method).toEqual('POST');

    req.flush(mockSignupReturn);
  }));
});
