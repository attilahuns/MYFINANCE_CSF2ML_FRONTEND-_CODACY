import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { TitleService } from 'src/app/core/services/title-service/title.service';
import { Agreement, AgreementMetadata } from './agreement';
import * as AgreementAction from "./state/agreement.actions";
import { getAgreements, getAgreementsMetadata, State } from './state/agreement.reducer';

@Component({
  selector: 'f2ml-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  originalData: Agreement[] = [];
  dataSource = new MatTableDataSource<Agreement>();
  metadata!: AgreementMetadata;
  content$ = combineLatest([this.store.select(getAgreements), this.store.select(getAgreementsMetadata)]).pipe(
    filter(([agreements, metadata]) => !!metadata.title),
    tap(([_, metadata]) => this.titleService.setTitle(metadata.title)),
    tap(([agreements, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(agreements);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.displayedRowsLimit));
      this.columns = [
        {
          name: 'contactHolder',
          header: metadata.tableMetadata.contractHolderLabel,
          sortable: true,
          value: (element: Agreement) => `${element.contactHolder}`,
        },
        {
          name: 'vehicule',
          header: metadata.tableMetadata.vehiculeLabel,
          sortable: true,
          value: (element: Agreement) => `${element.vehicule}`,
        },
        {
          name: 'registrationNumber',
          header: metadata.tableMetadata.registrationNumberLabel,
          sortable: true,
          value: (element: Agreement) => `${element.registrationNumber}`,
        },
        {
          name: 'financeProduct',
          header: metadata.tableMetadata.financeProductLabel,
          sortable: true,
          value: (element: Agreement) => `${element.financeProduct}`,
        },
        {
          name: 'agreementNumber',
          header: metadata.tableMetadata.agreementNumberLabel,
          sortable: true,
          value: (element: Agreement) => `${element.agreementNumber}`,
        },
        {
          name: 'agreementStartDate',
          header: metadata.tableMetadata.agreementStartDate,
          sortable: true,
          value: (element: Agreement) => `${element.agreementStartDate}`,
        },
        {
          name: 'details',
          header: metadata.tableMetadata.detailsLabel,
          sortable: false,
          value: (element: Agreement) => '',
        },
      ];
    }),
    map(([agreements, metadata]) => !!metadata.title),
  );

  displayFullData = false;

  constructor(private store: Store<State>, private titleService: TitleService, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AgreementAction.loadAgreement());
    this.store.dispatch(AgreementAction.loadAgreementMetadata());
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
