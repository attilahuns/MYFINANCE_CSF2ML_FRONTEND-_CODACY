import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Document } from './document';

import * as DocumentAction from "./state/document.actions";
import { getdocuments } from './state/document.reducer';

const LIMIT_DISPLAYED_ROWS = 5;
@Component({
  selector: 'f2ml-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  title = 'Documents';
  columns = [
    {
      name: 'documentType',
      header: 'Document Type',
      sortable: true,
      value: (element: Document) => `${element.documentType}`,
    },
    {
      name: 'date',
      header: 'date',
      sortable: true,
      value: (element: Document) => `${element.date}`,
    },
    {
      name: 'financeProduct',
      header: 'Finance product',
      sortable: true,
      value: (element: Document) => `${element.financeProduct}`,
    },
    {
      name: 'contract',
      header: 'Contract',
      sortable: true,
      value: (element: Document) => `${element.contract}`,
    },
    {
      name: 'vehicle',
      header: 'Vehicle',
      sortable: true,
      value: (element: Document) => `${element.vehicle}`,
    },
    {
      name: 'registrationNumber',
      header: 'Regitration number',
      sortable: true,
      value: (element: Document) => `${element.registrationNumber}`,
    },
    {
      name: 'download',
      header: 'Download',
      sortable: false,
      value: (element: Document) => '../../.././../../assets/images/download_icon.png',
    },
    {
      name: 'view',
      header: 'View',
      sortable: false,
      value: (element: Document) => '../../.././../../assets/images/view_icon.png',
    },
  ];
  originalData: Document[] = [];
  dataSource = new MatTableDataSource<Document>();
  documents$ = this.store.select(getdocuments).pipe(
    tap(documents => {
      this.originalData = this.originalData.concat(documents);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );
  displayFullData = false;

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(DocumentAction.loadDocument())
  }

  filterChange(filter: string): void {
    this.dataSource.filter =  filter.toLocaleLowerCase();
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, LIMIT_DISPLAYED_ROWS) : this.originalData;
  }

}
