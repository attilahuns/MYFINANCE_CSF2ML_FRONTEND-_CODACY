import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailTileComponent } from './bank-detail-tile.component';

describe('BankDetailTileComponent', () => {
  let component: BankDetailTileComponent;
  let fixture: ComponentFixture<BankDetailTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetailTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
