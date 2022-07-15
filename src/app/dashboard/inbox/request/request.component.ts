import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Request } from './request';
import * as RequestAction from "./state/request.actions";
import { getrequests } from './state/request.reducer';
const LIMIT_DISPLAYED_ROWS = 5;
@Component({
  selector: 'f2ml-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  title = 'Requests';
  columns = [
    {
      name: 'request',
      header: 'Requests',
      sortable: true,
      value: (element: Request) => `${element.request}`,
    },
    {
      name: 'details',
      header: 'Request details',
      sortable: true,
      value: (element: Request) => `${element.details}`,
    },
    {
      name: 'status',
      header: 'Status',
      sortable: true,
      value: (element: Request) => `${element.status}`,
    },
    {
      name: 'date',
      header: 'Date submited',
      sortable: true,
      value: (element: Request) => `${element.date}`,
    },
  ];
  originalData: Request[] = [];
  dataSource = new MatTableDataSource<Request>();
  requests$ = this.store.select(getrequests).pipe(
    tap(documents => {
      this.originalData = this.originalData.concat(documents);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );
  displayFullData = false;
  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(RequestAction.loadRequest())
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
