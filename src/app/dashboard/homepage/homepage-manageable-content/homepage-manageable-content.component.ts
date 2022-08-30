import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
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
