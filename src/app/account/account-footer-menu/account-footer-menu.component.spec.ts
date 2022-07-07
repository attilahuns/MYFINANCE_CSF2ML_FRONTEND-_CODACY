import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFooterMenuComponent } from './account-footer-menu.component';

describe('AccountFooterMenuComponent', () => {
  let component: AccountFooterMenuComponent;
  let fixture: ComponentFixture<AccountFooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFooterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
