import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfimDialogComponent } from './mat-confim-dialog.component';

describe('MatConfimDialogComponent', () => {
  let component: MatConfimDialogComponent;
  let fixture: ComponentFixture<MatConfimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConfimDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatConfimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
