import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOtpInvalidComponent } from './account-otp-invalid.component';

describe('AccountOtpInvalidComponent', () => {
  let component: AccountOtpInvalidComponent;
  let fixture: ComponentFixture<AccountOtpInvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOtpInvalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOtpInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
