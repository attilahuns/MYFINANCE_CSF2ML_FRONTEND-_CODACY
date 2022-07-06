import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Payment } from './payment';
import { getPayments } from './state/payment.reducer';
import * as PaymentAction from "./state/payment.actions";

const LIMIT_DISPLAYED_ROWS = 5;
@Component({
  selector: 'f2ml-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {

  title = 'Payment History';
  cta = 'Download';
  columns = [
    {
      name: 'dueAmount',
      header: 'Due Amount',
      sortable: true,
      value: (element: Payment) => `${element.dueAmount}`,
    },
    {
      name: 'status',
      header: 'Status',
      sortable: true,
      value: (element: Payment) => `${element.status}`,
    },
    {
      name: 'dueDate',
      header: 'Due Date',
      sortable: true,
      value: (element: Payment) => `${element.dueDate}`,
    },
    {
      name: 'View',
      header: 'View',
      sortable: false,
      value: (element: Payment) => '../../.././../../assets/images/view_icon.png',
    },
  ];
  originalData: Payment[] = [];
  dataSource = new MatTableDataSource<Payment>();
  payments$ = this.store.select(getPayments).pipe(
    tap(payments => {
      this.originalData = this.originalData.concat(payments);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );
  displayFullData = false;

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(PaymentAction.loadPayment())
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
