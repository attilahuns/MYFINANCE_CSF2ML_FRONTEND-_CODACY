import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, filter, map, Observable, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { AccessManagement, AccessManagementMetadata } from './access-management';
import { getAccessManagementItems, getAccessManagementMetadata, State } from './state/access-management.reducer';
import * as AccessManagementAction from "./state/access-management.actions";
import { AccessManagementEditableComponent } from './access-management-editable.component';
import { TitleService } from 'src/app/core/services/title-service/title.service';

@Component({
  selector: 'f2ml-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.scss']
})
export class AccessManagementComponent extends AccessManagementEditableComponent implements OnInit {

  originalData: AccessManagement[] = [];
  override dataSource = new MatTableDataSource<AccessManagement>();
  displayFullData = false;
  columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  metadata!: AccessManagementMetadata;
  content$: Observable<boolean> = combineLatest([this.store.select(getAccessManagementItems), this.store.select(getAccessManagementMetadata)]).pipe(
    filter(([accessManagementItems, metadata]) => !!metadata.title),
    tap(([_, metadata]) => this.titleService.setTitle(metadata.title)),
    tap(([accessManagementItems, metadata]) => {
      this.metadata = metadata;
      this.originalData = this.originalData.concat(accessManagementItems);
      this.dataSource = new MatTableDataSource(this.originalData.slice(0, metadata.tableMetadata.maxAccessNumber));
      this.columns = [
        {
          name: 'name',
          header: metadata.tableMetadata.nameLabel,
          sortable: true,
          value: (element: AccessManagement) => `${element.name}`,
        },
        {
          name: 'firstName',
          header: metadata.tableMetadata.firstnameLabel,
          sortable: true,
          value: (element: AccessManagement) => `${element.firstName}`,
        },
        {
          name: 'role',
          header: metadata.tableMetadata.roleLabel,
          sortable: true,
          value: (element: AccessManagement) => `${element.role}`,
        },
        {
          name: 'phone',
          header: metadata.tableMetadata.phoneLabel,
          sortable: true,
          value: (element: AccessManagement) => `${element.phone}`,
        },
        {
          name: 'email',
          header: metadata.tableMetadata.emailLabel,
          sortable: true,
          value: (element: AccessManagement) => `${element.email}`,
        },
        {
          name: 'actions',
          header: metadata.tableMetadata.actionsLabel,
          sortable: false,
          value: (element: AccessManagement) => '',
        },
      ];
    }),
    map(([accessManagementItems, metadata]) => !!metadata.title)
  )

  constructor(private store: Store<State>, private titleService: TitleService, public deviceDetector: DeviceDetectorService) {
    super();
   }

  ngOnInit(): void {
    this.store.dispatch(AccessManagementAction.loadAccessManagementItems())
    this.store.dispatch(AccessManagementAction.loadAccessManagementMetadata())
  }

  filterChange(filter: string): void {
    this.dataSource.filter =  filter.toLocaleLowerCase();
  }

  sortChange(sort: MatSort): void {
    this.dataSource.sort = sort;
  }

  displayData(displayFullData: boolean) {
    this.displayFullData = displayFullData;
    this.dataSource.data = !displayFullData ? this.originalData.slice(0, this.metadata.tableMetadata.maxAccessNumber) : this.originalData;
  }

}
