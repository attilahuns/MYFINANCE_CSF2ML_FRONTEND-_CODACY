import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompleteBusinessComponent } from './signup-complete-business.component';

describe('SignupCompleteBusinessComponent', () => {
  let component: SignupCompleteBusinessComponent;
  let fixture: ComponentFixture<SignupCompleteBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCompleteBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCompleteBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
