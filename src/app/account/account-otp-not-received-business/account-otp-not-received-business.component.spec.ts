import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOtpNotReceivedBusinessComponent } from './account-otp-not-received-business.component';

describe('AccountOtpNotReceivedBusinessComponent', () => {
  let component: AccountOtpNotReceivedBusinessComponent;
  let fixture: ComponentFixture<AccountOtpNotReceivedBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOtpNotReceivedBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOtpNotReceivedBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
