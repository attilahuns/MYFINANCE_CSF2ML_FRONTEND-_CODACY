import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDocumentDetailMetadata } from '../state/document.reducer';
import * as DocumentAction from "../state/document.actions";

@Component({
  selector: 'f2ml-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  metadata$ = this.store.select(getDocumentDetailMetadata)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(DocumentAction.loadDocumentMetadata());
  }

}
