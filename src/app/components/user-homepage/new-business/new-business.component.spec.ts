import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBusinessComponent } from './new-business.component';

describe('NewBusinessComponent', () => {
  let component: NewBusinessComponent;
  let fixture: ComponentFixture<NewBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the word stub', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'stub'
    );
  });
});
