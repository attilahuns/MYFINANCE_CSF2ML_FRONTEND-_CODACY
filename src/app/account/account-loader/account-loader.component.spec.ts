import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoaderComponent } from './account-loader.component';

describe('AccountLoaderComponent', () => {
  let component: AccountLoaderComponent;
  let fixture: ComponentFixture<AccountLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
