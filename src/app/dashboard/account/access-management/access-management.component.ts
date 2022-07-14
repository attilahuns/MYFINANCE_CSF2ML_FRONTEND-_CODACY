import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { AccessManagement } from './access-management';
import { getAccessManagementItems } from './state/access-management.reducer';
import * as AccessManagementAction from "./state/access-management.actions";
import { MatInput } from '@angular/material/input';
import { AccessManagementEditableComponent } from './access-management-editable.component';

const LIMIT_DISPLAYED_ROWS = 5;

@Component({
  selector: 'f2ml-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.scss']
})
export class AccessManagementComponent extends AccessManagementEditableComponent implements OnInit {

  title = 'Access Management';
  columns = [
    {
      name: 'name',
      header: 'Name',
      sortable: true,
      value: (element: AccessManagement) => `${element.name}`,
    },
    {
      name: 'firstName',
      header: 'FirstName',
      sortable: true,
      value: (element: AccessManagement) => `${element.firstName}`,
    },
    {
      name: 'role',
      header: 'Role',
      sortable: true,
      value: (element: AccessManagement) => `${element.role}`,
    },
    {
      name: 'phone',
      header: 'Phone',
      sortable: true,
      value: (element: AccessManagement) => `${element.phone}`,
    },
    {
      name: 'email',
      header: 'Email',
      sortable: true,
      value: (element: AccessManagement) => `${element.email}`,
    },
    {
      name: 'actions',
      header: 'Actions',
      sortable: false,
      value: (element: AccessManagement) => '',
    },
  ];
  originalData: AccessManagement[] = [];
  override dataSource = new MatTableDataSource<AccessManagement>();
  accessManagementItems$ = this.store.select(getAccessManagementItems).pipe(
    tap(accessManagementItems => {
      this.originalData = this.originalData.concat(accessManagementItems);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, LIMIT_DISPLAYED_ROWS));
    }),
  );
  displayFullData = false;

  constructor(private store: Store, public deviceDetector: DeviceDetectorService) {
    super();
   }

  ngOnInit(): void {
    this.store.dispatch(AccessManagementAction.loadAccessManagementItems())
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
