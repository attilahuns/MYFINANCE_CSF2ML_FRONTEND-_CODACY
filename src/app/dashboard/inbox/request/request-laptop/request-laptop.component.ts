import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Request, RequestStatus } from '../request';

@Component({
  selector: 'f2ml-request-laptop',
  templateUrl: './request-laptop.component.html',
  styleUrls: ['./request-laptop.component.scss']
})
export class RequestLaptopComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<Request>;
  @Output() sortChange = new EventEmitter<MatSort>();
  private sub!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(column => column.name);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sub = this.sort.sortChange.subscribe(value => {
      this.sortChange.emit(this.sort);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  isInProgress(status: string): boolean {
    return status === RequestStatus.IN_PROGRESS;
  }

  isCanceled(status: string): boolean {
    return status === RequestStatus.CANCELED;
  }

  isCompleted(status: string): boolean {
    return status === RequestStatus.COMPLETED;
  }

}
