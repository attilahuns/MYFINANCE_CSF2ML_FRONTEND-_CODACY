import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Document, DocumentMetadata } from '../homepage';

@Component({
  selector: 'f2ml-homepage-documents',
  templateUrl: './homepage-documents.component.html',
  styleUrls: ['./homepage-documents.component.scss']
})
export class HomepageDocumentsComponent implements OnInit {

  @Input() metadata!: DocumentMetadata;
  @Input() documents!: Document[];

  constructor() { }

  ngOnInit(): void { }

  getViewIconUrl() {
    return environment.cms.endpoint + this.metadata.viewIcon;
  }

}
