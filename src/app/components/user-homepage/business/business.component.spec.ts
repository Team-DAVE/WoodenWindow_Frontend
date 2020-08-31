import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { BusinessComponent } from './business.component';
import { Business } from 'src/app/models/business';

//////////  Tests  ////////////////////

describe('BusinessComponent', () => {
  let component: BusinessComponent;
  let expectedBusiness: Business;
  let router: any;
  let businessServiceSpy: any;

  beforeEach(() => {
    expectedBusiness = {
      businessId: 1,
      name: 'Farmer School',
      address: 'Place',
      mission: 'Teach you to drive in a straight line.',
      summary: 'Nothing teaches like Farmer School'
    };
    const activatedRouteStub = new ActivatedRouteStub({ id: expectedBusiness.businessId });
    router = jasmine.createSpyObj('router', ['navigate']);

    businessServiceSpy = jasmine.createSpyObj('BusinessService', ['getBusiness']);
    businessServiceSpy.getBusiness.and.returnValue(expectedBusiness);

    component = new BusinessComponent(activatedRouteStub as any, businessServiceSpy);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the business retrieved from the service', () => {
    expect(component.business).toBe(expectedBusiness);
  });

});
