import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementLaptopComponent } from './access-management-laptop.component';

describe('AccessManagementLaptopComponent', () => {
  let component: AccessManagementLaptopComponent;
  let fixture: ComponentFixture<AccessManagementLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
