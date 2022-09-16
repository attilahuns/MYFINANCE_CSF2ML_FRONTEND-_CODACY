import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementEnterpriseLaptopComponent } from './access-management-enterprise-laptop.component';

describe('AccessManagementEnterpriseLaptopComponent', () => {
  let component: AccessManagementEnterpriseLaptopComponent;
  let fixture: ComponentFixture<AccessManagementEnterpriseLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementEnterpriseLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementEnterpriseLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
