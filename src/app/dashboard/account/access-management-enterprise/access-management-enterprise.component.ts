import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccessManagementEnterprise } from './access-management-entreprise';
import { getAccessManagementEnterpriseItems } from './state/access-management-enterprise.reducer';
import * as AccessManagementEnterpriseAction from "./state/access-management-enterprise.actions";
import { tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'f2ml-access-management-enterprise',
  templateUrl: './access-management-enterprise.component.html',
  styleUrls: ['./access-management-enterprise.component.scss']
})
export class AccessManagementEnterpriseComponent implements OnInit {

  columns = [
    {
      name: 'piva',
      header: 'PIVA',
      sortable: true,
      value: (element: AccessManagementEnterprise) => `${element.piva}`,
    },
    {
      name: 'companyName',
      header: 'Name of the company',
      sortable: true,
      value: (element: AccessManagementEnterprise) => `${element.companyName}`,
    },
    {
      name: 'manageAccesses',
      header: 'Manage Accesses',
      sortable: false,
      value: (element: AccessManagementEnterprise) => '',
    },
  ];
  originalData: AccessManagementEnterprise[] = [];
  dataSource = new MatTableDataSource<AccessManagementEnterprise>();
  accessManagementEnterpriseItems$ = this.store.select(getAccessManagementEnterpriseItems).pipe(
    tap(accessManagementEnterpriseItems => {
      this.originalData = this.originalData.concat(accessManagementEnterpriseItems);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, 5));
    }),
  )
  displayFullData = false;
  displayedColumns: string[] = [];

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(AccessManagementEnterpriseAction.loadAccessManagementEnterpriseItems());
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, 5) : this.originalData;
  }

}
