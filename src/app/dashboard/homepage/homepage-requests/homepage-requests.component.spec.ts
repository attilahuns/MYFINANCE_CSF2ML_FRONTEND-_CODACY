import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRequestsComponent } from './homepage-requests.component';

describe('HomepageRequestsComponent', () => {
  let component: HomepageRequestsComponent;
  let fixture: ComponentFixture<HomepageRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
