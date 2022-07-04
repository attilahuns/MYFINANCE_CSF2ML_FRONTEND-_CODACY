import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { Agreement } from './agreement';
import * as AgreementAction from "./state/agreement.actions";
import { getAgreements } from './state/agreement.reducer';

const LIMIT_DISPLAYED_ROWS = 5;

@Component({
  selector: 'f2ml-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  title = 'Agreements';
  columns = [
    {
      name: 'contactHolder',
      header: 'Contact Holder',
      sortable: true,
      value: (element: Agreement) => `${element.contactHolder}`,
    },
    {
      name: 'vehicule',
      header: 'Vehicule',
      sortable: true,
      value: (element: Agreement) => `${element.vehicule}`,
    },
    {
      name: 'registrationNumber',
      header: 'Registration Number',
      sortable: true,
      value: (element: Agreement) => `${element.registrationNumber}`,
    },
    {
      name: 'financeProduct',
      header: 'Finance Product',
      sortable: true,
      value: (element: Agreement) => `${element.financeProduct}`,
    },
    {
      name: 'agreementNumber',
      header: 'Agreement Number',
      sortable: true,
      value: (element: Agreement) => `${element.agreementNumber}`,
    },
    {
      name: 'agreementStartDate',
      header: 'Agreement Start Date',
      sortable: true,
      value: (element: Agreement) => `${element.agreementStartDate}`,
    },
    {
      name: 'details',
      header: 'Details',
      sortable: false,
      value: (element: Agreement) => '',
    },
  ];
  originalData: Agreement[] = [];
  dataSource = new MatTableDataSource<Agreement>();
  agreements$ = this.store.select(getAgreements).pipe(
    tap(agreements => {
      this.originalData = this.originalData.concat(agreements);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );
  displayFullData = false;

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AgreementAction.loadAgreement())
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
