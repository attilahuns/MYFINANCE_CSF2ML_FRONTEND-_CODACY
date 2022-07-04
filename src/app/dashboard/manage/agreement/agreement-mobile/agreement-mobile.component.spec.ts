import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementMobileComponent } from './agreement-mobile.component';

describe('AgreementMobileComponent', () => {
  let component: AgreementMobileComponent;
  let fixture: ComponentFixture<AgreementMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
