import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLaptopComponent } from './request-laptop.component';

describe('RequestLaptopComponent', () => {
  let component: RequestLaptopComponent;
  let fixture: ComponentFixture<RequestLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
