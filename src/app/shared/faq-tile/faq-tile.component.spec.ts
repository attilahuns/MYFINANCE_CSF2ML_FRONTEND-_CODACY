import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTileComponent } from './faq-tile.component';

describe('FaqTileComponent', () => {
  let component: FaqTileComponent;
  let fixture: ComponentFixture<FaqTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
