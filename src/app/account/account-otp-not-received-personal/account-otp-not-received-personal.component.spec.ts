import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOtpNotReceivedPersonalComponent } from './account-otp-not-received-personal.component';

describe('AccountOtpNotReceivedPersonalComponent', () => {
  let component: AccountOtpNotReceivedPersonalComponent;
  let fixture: ComponentFixture<AccountOtpNotReceivedPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOtpNotReceivedPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOtpNotReceivedPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
