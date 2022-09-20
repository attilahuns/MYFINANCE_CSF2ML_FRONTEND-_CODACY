import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccessManagementEnterprise, AccessManagementEnterpriseMetadata } from './access-management-entreprise';
import { getAccessManagementEnterpriseItems, getAccessManagementEnterpriseMetadata } from './state/access-management-enterprise.reducer';
import * as AccessManagementEnterpriseAction from "./state/access-management-enterprise.actions";
import { combineLatest, filter, map, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'f2ml-access-management-enterprise',
  templateUrl: './access-management-enterprise.component.html',
  styleUrls: ['./access-management-enterprise.component.scss']
})
export class AccessManagementEnterpriseComponent implements OnInit {

  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  originalData: AccessManagementEnterprise[] = [];
  dataSource = new MatTableDataSource<AccessManagementEnterprise>();
  metadata!: AccessManagementEnterpriseMetadata;
  displayFullData = false;

  content$ = combineLatest([this.store.select(getAccessManagementEnterpriseItems), this.store.select(getAccessManagementEnterpriseMetadata)]).pipe(
    filter(([accessManagementEnterprise, metadata]) => !!metadata.title),
    tap(([accessManagementEnterprise, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(accessManagementEnterprise);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.tableMetadata.maxAccessNumber));
      this.columns = [
        {
          name: 'piva',
          header: metadata.tableMetadata.pivaLabel,
          sortable: true,
          value: (element: AccessManagementEnterprise) => `${element.piva}`,
        },
        {
          name: 'companyName',
          header: metadata.tableMetadata.companyNameLabel,
          sortable: true,
          value: (element: AccessManagementEnterprise) => `${element.companyName}`,
        },
        {
          name: 'manageAccesses',
          header: metadata.tableMetadata.manageAccessesLabel,
          sortable: false,
          value: (element: AccessManagementEnterpriseMetadata) => `${metadata.tableMetadata.manageAccessesCtaLabel}`,
        }
      ];
    }),
    map(([accessManagementEnterprise, metadata]) => !!metadata.title),
  );

  displayedColumns: string[] = [];

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItems());
    this.store.dispatch(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseMetadata());
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, this.metadata.tableMetadata.maxAccessNumber) : this.originalData;
  }

}
