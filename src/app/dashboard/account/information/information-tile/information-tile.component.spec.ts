import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTileComponent } from './information-tile.component';

describe('InformationTileComponent', () => {
  let component: InformationTileComponent;
  let fixture: ComponentFixture<InformationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
