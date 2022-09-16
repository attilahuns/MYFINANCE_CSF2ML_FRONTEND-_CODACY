import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementEnterpriseComponent } from './access-management-enterprise.component';

describe('AccessManagementEnterpriseComponent', () => {
  let component: AccessManagementEnterpriseComponent;
  let fixture: ComponentFixture<AccessManagementEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
