import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementMobileComponent } from './access-management-mobile.component';

describe('AccessManagementMobileComponent', () => {
  let component: AccessManagementMobileComponent;
  let fixture: ComponentFixture<AccessManagementMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
