import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailTableComponent } from './contract-detail-table.component';

describe('ContractDetailTableComponent', () => {
  let component: ContractDetailTableComponent;
  let fixture: ComponentFixture<ContractDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
