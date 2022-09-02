import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqVoteComponent } from './faq-vote.component';

describe('FaqVoteComponent', () => {
  let component: FaqVoteComponent;
  let fixture: ComponentFixture<FaqVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
