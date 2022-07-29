import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Request, RequestMetadata } from './request';
import * as RequestAction from "./state/request.actions";
import { getRequestsData, getRequestsMetadata } from './state/request.reducer';

@Component({
  selector: 'f2ml-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  originalData: Request[] = [];
  dataSource = new MatTableDataSource<Request>();
  metadata!: RequestMetadata;
  content$ = combineLatest([this.store.select(getRequestsData), this.store.select(getRequestsMetadata)]).pipe(
    filter(([requests, metadata]) => '' !== metadata.title),
    tap(([requests, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(requests);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.displayedRowsLimit));
      this.columns = [
        {
          name: 'request',
          header: metadata.requestsLabel,
          sortable: true,
          value: (element: Request) => `${element.request}`,
        },
        {
          name: 'details',
          header: metadata.requestDetailsLabel,
          sortable: true,
          value: (element: Request) => `${element.details}`,
        },
        {
          name: 'status',
          header: metadata.statusLabel,
          sortable: true,
          value: (element: Request) => `${element.status}`,
        },
        {
          name: 'date',
          header: metadata.dateSubmittedLabel,
          sortable: true,
          value: (element: Request) => `${element.date}`,
        },
      ];
    }),
    map(([requests, metadata]) => '' !== metadata.title),
  );
  displayFullData = false;
  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(RequestAction.loadRequest());
    this.store.dispatch(RequestAction.loadRequestMetadata());
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

}
