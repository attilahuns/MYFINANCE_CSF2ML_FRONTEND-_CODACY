import { Component, Input, OnInit } from '@angular/core';
import { Request, RequestStatus } from '../request';

@Component({
  selector: 'f2ml-request-mobile',
  templateUrl: './request-mobile.component.html',
  styleUrls: ['./request-mobile.component.scss']
})
export class RequestMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: Request[] = [];
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(column => column.name);
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
