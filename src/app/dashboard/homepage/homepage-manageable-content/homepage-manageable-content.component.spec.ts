import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageManageableContentComponent } from './homepage-manageable-content.component';

describe('HomepageManageableContentComponent', () => {
  let component: HomepageManageableContentComponent;
  let fixture: ComponentFixture<HomepageManageableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageManageableContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageManageableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
