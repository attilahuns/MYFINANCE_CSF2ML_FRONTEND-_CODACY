import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment, PaymentMetadata } from '../payment';

@Component({
  selector: 'f2ml-payment-history-laptop',
  templateUrl: './payment-history-laptop.component.html',
  styleUrls: ['./payment-history-laptop.component.scss']
})
export class PaymentHistoryLaptopComponent implements OnInit,  AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<Payment>;
  @Output() sortChange = new EventEmitter<MatSort>();
  private sub!: Subscription;
  @Input() metadata!: PaymentMetadata;
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

  getIconUrl(icon: string) {
    return environment.cms.endpoint + icon;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
