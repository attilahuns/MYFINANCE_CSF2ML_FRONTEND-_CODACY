import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAgreementsComponent } from './homepage-agreements.component';

describe('HomepageAgreementsComponent', () => {
  let component: HomepageAgreementsComponent;
  let fixture: ComponentFixture<HomepageAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
