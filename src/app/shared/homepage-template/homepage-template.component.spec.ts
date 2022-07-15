import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTemplateComponent } from './homepage-template.component';

describe('HomepageTemplateComponent', () => {
  let component: HomepageTemplateComponent;
  let fixture: ComponentFixture<HomepageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
