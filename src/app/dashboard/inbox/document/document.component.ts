import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Document, DocumentMetadata } from './document';
import * as DocumentAction from "./state/document.actions";
import { getdocuments, getDocumentsMetadata, State } from './state/document.reducer';
import { environment } from 'src/environments/environment';
import { TitleService } from 'src/app/core/services/title-service/title.service';

@Component({
  selector: 'f2ml-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction, metadata?: any }[] = [];
  originalData: Document[] = [];
  dataSource = new MatTableDataSource<Document>();
  metadata!: DocumentMetadata;
  content$ = combineLatest([this.store.select(getdocuments), this.store.select(getDocumentsMetadata)]).pipe(
    filter(([documents, metadata]) => !!metadata.title),
    tap(([_, metadata]) => this.titleService.setTitle(metadata.title)),
    tap(([documents, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(documents);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.displayedRowsLimit));
      this.columns = [
        {
          name: 'documentType',
          header: metadata.tableMetadata.documentTypeLabel,
          sortable: true,
          value: (element: Document) => `${element.documentType}`,
        },
        {
          name: 'date',
          header: metadata.tableMetadata.dateLabel,
          sortable: true,
          value: (element: Document) => `${element.date}`,
        },
        {
          name: 'financeProduct',
          header: metadata.tableMetadata.financeProductLabel,
          sortable: true,
          value: (element: Document) => `${element.financeProduct}`,
        },
        {
          name: 'contract',
          header: metadata.tableMetadata.contractLabel,
          sortable: true,
          value: (element: Document) => `${element.contract}`,
        },
        {
          name: 'vehicle',
          header: metadata.tableMetadata.vehicleLabel,
          sortable: true,
          value: (element: Document) => `${element.vehicle}`,
        },
        {
          name: 'registrationNumber',
          header: metadata.tableMetadata.registrationNumberLabel,
          sortable: true,
          value: (element: Document) => `${element.registrationNumber}`,
        },
        {
          name: 'download',
          header: metadata.tableMetadata.downloadColumn.label,
          sortable: false,
          value: (element: Document) => this.getIcon(metadata.tableMetadata.downloadColumn.picto),
          metadata: {
            alt: metadata.tableMetadata.downloadColumn.alt
          }
        },
        {
          name: 'view',
          header: metadata.tableMetadata.viewColumn.label,
          sortable: false,
          value: (element: Document) => this.getIcon(metadata.tableMetadata.viewColumn.picto),
          metadata: {
            alt: metadata.tableMetadata.viewColumn.alt
          }
        },
      ];
    }),
    map(([documents, metadata]) => !!metadata.title),
  );
  displayFullData = false;

  constructor(private store: Store<State>, private titleService: TitleService, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(DocumentAction.loadDocument());
    this.store.dispatch(DocumentAction.loadDocumentMetadata());
  }

  filterChange(filter: string): void {
    this.dataSource.filter =  filter.toLocaleLowerCase();
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, this.metadata.displayedRowsLimit) : this.originalData;
  }

  getIcon(url: string): string {
    return environment.cms.endpoint + url;
  }
}
