import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordComponent } from './update-password.component';

describe('UpdatePasswordComponent', () => {
  let component: UpdatePasswordComponent;
  let fixture: ComponentFixture<UpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordComponent);
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
