import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryMobileComponent } from './payment-history-mobile.component';

describe('PaymentHistoryMobileComponent', () => {
  let component: PaymentHistoryMobileComponent;
  let fixture: ComponentFixture<PaymentHistoryMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHistoryMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHistoryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
