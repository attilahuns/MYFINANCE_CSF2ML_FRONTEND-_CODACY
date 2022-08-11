import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { CommunicationMetadata } from './communication';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'f2ml-communication-tile',
  templateUrl: './communication-tile.component.html',
  styleUrls: ['./communication-tile.component.scss']
})
export class CommunicationTileComponent implements OnInit {
  @Input() centered: boolean = true;
  @Input() metadata!: CommunicationMetadata;

  constructor(private sanitizer: DomSanitizer, public deviceDetector: DeviceDetectorService, private router: Router) { }

  ngOnInit(): void {

  }

  getVideoSanitizedUrl(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    let videoCode = url;
    if (match && match[2].length == 11) {
        videoCode = match[2];
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoCode}`) as string;
  }
  downloadPdf(uri: string): void {
    window.open(environment.cms.endpoint + uri);
  }
  navigate(url: string): void {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
      return;
    }
    this.router.navigateByUrl(url);
  }
  getImageUrl(uri: string): string {
    return environment.cms.endpoint + uri;
  }

}
