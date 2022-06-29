import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMobileComponent } from './document-mobile.component';

describe('DocumentMobileComponent', () => {
  let component: DocumentMobileComponent;
  let fixture: ComponentFixture<DocumentMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
