import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementLaptopComponent } from './agreement-laptop.component';

describe('AgreementLaptopComponent', () => {
  let component: AgreementLaptopComponent;
  let fixture: ComponentFixture<AgreementLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
