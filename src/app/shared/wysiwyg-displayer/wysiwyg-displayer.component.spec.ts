import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygDisplayerComponent } from './wysiwyg-displayer.component';

describe('WysiwygDisplayerComponent', () => {
  let component: WysiwygDisplayerComponent;
  let fixture: ComponentFixture<WysiwygDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WysiwygDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
