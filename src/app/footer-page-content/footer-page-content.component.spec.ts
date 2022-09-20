import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPageContentComponent } from './footer-page-content.component';

describe('FooterPageContentComponent', () => {
  let component: FooterPageContentComponent;
  let fixture: ComponentFixture<FooterPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
