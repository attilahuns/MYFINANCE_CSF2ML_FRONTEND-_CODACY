import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLaptopComponent } from './document-laptop.component';

describe('DocumentLaptopComponent', () => {
  let component: DocumentLaptopComponent;
  let fixture: ComponentFixture<DocumentLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
