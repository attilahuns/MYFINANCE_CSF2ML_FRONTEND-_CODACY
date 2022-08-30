import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoPlayerComponent } from './youtube-video-player.component';

describe('YoutubeVideoPlayerComponent', () => {
  let component: YoutubeVideoPlayerComponent;
  let fixture: ComponentFixture<YoutubeVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
