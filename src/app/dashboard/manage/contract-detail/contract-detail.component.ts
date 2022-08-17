import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ContractDetail, ContractDetailMetadata } from './contractDetail';
import * as ContractDetailsAction from "./state/contract-details.actions";
import { combineLatest, filter, map, tap } from 'rxjs';
import { getContractDetails, getContractMetadataDetails } from './state/contract-details.reducer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'f2ml-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  originalData: ContractDetail[] = [];
  contractDetailMetadata!: ContractDetailMetadata;
  dataSource = new MatTableDataSource<ContractDetail>();
  displayFullData = false;
  servicesDataSource: { title: string, text: string }[] = [];
  contracts$ = combineLatest([this.store.select(getContractDetails), this.store.select(getContractMetadataDetails)]).pipe(
    filter(([contracts, contractDetailMetadata]) => !!contractDetailMetadata.title),
    tap(([contracts, contractDetailMetadata]) => {
      this.originalData = this.originalData.concat(contracts);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, contractDetailMetadata.documentDetailMetadata.displayedRowsLimit));
      this.servicesDataSource = this.services.slice(0, contractDetailMetadata.serviceDetailMetadata.displayedRowsLimit);
      this.contractDetailMetadata = contractDetailMetadata;
      this.columns = [
        {
          name: 'document',
          header: contractDetailMetadata.documentDetailMetadata.documentLabel,
          sortable: true,
          value: (element: ContractDetail) => `${element.document}`,
        },
        {
          name: 'reference',
          header: contractDetailMetadata.documentDetailMetadata.referenceLabel,
          sortable: true,
          value: (element: ContractDetail) => `${element.reference}`,
        },
        {
          name: 'date',
          header: contractDetailMetadata.documentDetailMetadata.dateLabel,
          sortable: true,
          value: (element: ContractDetail) => `${element.date}`,
        },
        {
          name: 'download',
          header: contractDetailMetadata.documentDetailMetadata.downloadColumn.label,
          sortable: false,
          value: (element: ContractDetail) => this.getIcon(contractDetailMetadata.documentDetailMetadata.downloadColumn.picto),
        },
        {
          name: 'view',
          header: contractDetailMetadata.documentDetailMetadata.viewColumn.label,
          sortable: false,
          value: (element: ContractDetail) => this.getIcon(contractDetailMetadata.documentDetailMetadata.viewColumn.picto)
        },
      ];
    }),
    map(([contracts, contractDetailMetadata]) => !!contractDetailMetadata.title)
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

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(ContractDetailsAction.loadContractDetail());
    this.store.dispatch(ContractDetailsAction.loadContractDetailMetadata());
  }

  filterChange(filter: string): void {
    this.dataSource.filter =  filter.toLocaleLowerCase();
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, this.contractDetailMetadata.documentDetailMetadata.displayedRowsLimit) : this.originalData;
  }

  displayServicesData(displayAllServices: boolean){
    this.displayFullServices = displayAllServices;
    this.servicesDataSource = !displayAllServices ? this.services.slice(0, this.contractDetailMetadata.serviceDetailMetadata.displayedRowsLimit) : this.services;
  }

  getIcon(url: string): string {
    return environment.cms.endpoint + url;
  }
}
