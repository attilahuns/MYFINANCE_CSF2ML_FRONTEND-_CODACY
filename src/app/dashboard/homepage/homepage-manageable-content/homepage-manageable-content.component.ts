import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ManageableContentMetadata } from '../homepage';

@Component({
  selector: 'f2ml-homepage-manageable-content',
  templateUrl: './homepage-manageable-content.component.html',
  styleUrls: ['./homepage-manageable-content.component.scss']
})
export class HomepageManageableContentComponent implements OnInit {

  @Input() metadata!: ManageableContentMetadata;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

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
  navigateTo(uri: string): void {
    if (uri.includes('http')) {
      window.open(uri);
      return;
    }
    this.router.navigate([uri]);
  }
  getImageUrl(uri: string): string {
    return environment.cms.endpoint + uri;
  }
}
