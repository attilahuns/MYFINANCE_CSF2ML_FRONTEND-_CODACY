import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Payment, PaymentMetadata } from './payment';
import { getPaymentMetadata, getPayments } from './state/payment.reducer';
import * as PaymentAction from "./state/payment.actions";

@Component({
  selector: 'f2ml-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  originalData: Payment[] = [];
  dataSource = new MatTableDataSource<Payment>();
  displayFullData = false;
  metadata!: PaymentMetadata;
  content$: Observable<boolean> = combineLatest([this.store.select(getPayments), this.store.select(getPaymentMetadata)]).pipe(
    filter(([payments, metadata]) => !!metadata.title),
    tap(([payments, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(payments);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.tableMetadata.displayedRowsLimit));
      this.columns = [
        {
          name: 'dueAmount',
          header: metadata.tableMetadata.dueAmountLabel,
          sortable: true,
          value: (element: Payment) => `${element.dueAmount}`,
        },
        {
          name: 'status',
          header: metadata.tableMetadata.statusLabel,
          sortable: true,
          value: (element: Payment) => `${element.status}`,
        },
        {
          name: 'dueDate',
          header: metadata.tableMetadata.dueDatelabelLabel,
          sortable: true,
          value: (element: Payment) => `${element.dueDate}`,
        },
        {
          name: 'View',
          header: metadata.tableMetadata.viewColumn.label,
          sortable: false,
          value: (element: Payment) => '',
        },
      ];
    }),
    map(([payments, metadata]) => !!metadata.title)
  )

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(PaymentAction.loadPayment());
    this.store.dispatch(PaymentAction.loadPaymentMetadata());
  }

  filterChange(filter: string): void {
    this.dataSource.filter =  filter.toLocaleLowerCase();
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, this.metadata.tableMetadata.displayedRowsLimit) : this.originalData;
  }

}
