import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTileComponent } from './communication-tile.component';

describe('CommunicationTileComponent', () => {
  let component: CommunicationTileComponent;
  let fixture: ComponentFixture<CommunicationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
