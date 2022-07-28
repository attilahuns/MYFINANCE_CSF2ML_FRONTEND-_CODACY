import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompletePersonalComponent } from './signup-complete-personal.component';

describe('SignupCompletePersonalComponent', () => {
  let component: SignupCompletePersonalComponent;
  let fixture: ComponentFixture<SignupCompletePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCompletePersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCompletePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
