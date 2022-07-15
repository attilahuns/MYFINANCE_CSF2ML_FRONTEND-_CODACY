import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDocumentsComponent } from './homepage-documents.component';

describe('HomepageDocumentsComponent', () => {
  let component: HomepageDocumentsComponent;
  let fixture: ComponentFixture<HomepageDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
