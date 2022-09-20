import { TestBed } from '@angular/core/testing';

import { AccessManagementEnterpriseService } from './access-management-enterprise.service';

describe('AccessManagementEnterpriseService', () => {
  let service: AccessManagementEnterpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessManagementEnterpriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
