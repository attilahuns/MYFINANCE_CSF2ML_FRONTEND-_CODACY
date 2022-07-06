import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHistoryLaptopComponent } from './payment-history-laptop.component';

describe('PaymentHistoryLaptopComponent', () => {
  let component: PaymentHistoryLaptopComponent;
  let fixture: ComponentFixture<PaymentHistoryLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHistoryLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHistoryLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
