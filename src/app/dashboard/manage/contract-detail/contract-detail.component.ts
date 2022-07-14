import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ContractDetail } from './contractDetail';
import * as ContractDetailsAction from "./state/contract-details.actions";
import { tap } from 'rxjs';
import { getContractDetails } from './state/contract-details.reducer';

const LIMIT_DISPLAYED_ROWS = 3;

@Component({
  selector: 'f2ml-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  columns = [
    {
      name: 'document',
      header: 'Document',
      sortable: true,
      value: (element: ContractDetail) => `${element.document}`,
    },
    {
      name: 'reference',
      header: 'Reference',
      sortable: true,
      value: (element: ContractDetail) => `${element.reference}`,
    },
    {
      name: 'date',
      header: 'Date',
      sortable: true,
      value: (element: ContractDetail) => `${element.date}`,
    },
    {
      name: 'download',
      header: 'Download',
      sortable: false,
      value: (element: ContractDetail) => '../../.././../../assets/images/download_icon.png',
    },
    {
      name: 'view',
      header: 'View',
      sortable: false,
      value: (element: ContractDetail) => '../../.././../../assets/images/view_icon.png'
    },
  ];
  originalData: ContractDetail[] = [];
  dataSource = new MatTableDataSource<ContractDetail>();
  displayFullData = false;
  contracts$ = this.store.select(getContractDetails).pipe(
    tap(contracts => {
      this.originalData = this.originalData.concat(contracts);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );

  services = [
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'},
    { title : 'EGVO Premiuim VEG 12' , text : 'Lorem Ipsum'}
  ]
  displayFullServices: boolean = false;
  servicesDataSource = this.services.slice(0, 2);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ContractDetailsAction.loadContractDetail())
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

  displayServicesData(displayAllServices: boolean){
    this.displayFullServices = displayAllServices;
    this.servicesDataSource = !displayAllServices ? this.services.slice(0, 2) : this.services;
  }
}
