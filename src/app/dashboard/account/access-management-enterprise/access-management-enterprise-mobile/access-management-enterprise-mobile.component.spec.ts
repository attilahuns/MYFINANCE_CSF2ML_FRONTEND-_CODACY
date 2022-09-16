import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementEnterpriseMobileComponent } from './access-management-enterprise-mobile.component';

describe('AccessManagementEnterpriseMobileComponent', () => {
  let component: AccessManagementEnterpriseMobileComponent;
  let fixture: ComponentFixture<AccessManagementEnterpriseMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementEnterpriseMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementEnterpriseMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
