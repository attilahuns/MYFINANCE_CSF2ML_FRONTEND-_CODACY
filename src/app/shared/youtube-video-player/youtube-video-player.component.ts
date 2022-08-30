import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'f2ml-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent implements OnInit {

  private static readonly youtubeApiEndpoint = 'https://www.youtube.com/iframe_api';
  private static apiLoaded = false;

  videoId!: string;

  @Input() set videoUrl(videoUrl: string) {
    this.videoId = new URL(videoUrl).searchParams.get('v') as string;
  }

  constructor() { }

  ngOnInit(): void {
    if (!YoutubeVideoPlayerComponent.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = YoutubeVideoPlayerComponent.youtubeApiEndpoint;
      document.body.appendChild(tag);
      YoutubeVideoPlayerComponent.apiLoaded = true;
    }
  }

}
