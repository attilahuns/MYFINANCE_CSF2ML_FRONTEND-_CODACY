import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompleteIndividualComponent } from './signup-complete-individual.component';

describe('SignupCompleteIndividualComponent', () => {
  let component: SignupCompleteIndividualComponent;
  let fixture: ComponentFixture<SignupCompleteIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCompleteIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCompleteIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
