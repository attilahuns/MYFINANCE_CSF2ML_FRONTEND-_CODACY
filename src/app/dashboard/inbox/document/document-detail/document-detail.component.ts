import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDocumentDetailMetadata, State } from '../state/document.reducer';
import * as DocumentAction from "../state/document.actions";
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TitleService } from 'src/app/core/services/title-service/title.service';

@Component({
  selector: 'f2ml-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  metadata$ = this.store.select(getDocumentDetailMetadata)

  constructor(private store: Store<State>, private titleService: TitleService, private breadcrumbService: BreadcrumbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(DocumentAction.loadDocumentMetadata());
    const id = this.route.snapshot.params['id'];
    const title = `Contract ${id}`;
    this.titleService.setTitle(title);
    this.breadcrumbService.set('@document-details', title);
  }

}
