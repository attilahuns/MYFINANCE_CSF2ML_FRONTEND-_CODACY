import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOtpNotReceivedComponent } from './account-otp-not-received.component';

describe('AccountOtpNotReceivedComponent', () => {
  let component: AccountOtpNotReceivedComponent;
  let fixture: ComponentFixture<AccountOtpNotReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOtpNotReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOtpNotReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
