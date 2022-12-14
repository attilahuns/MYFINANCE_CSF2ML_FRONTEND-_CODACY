import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AccessManagementEnterprise } from '../access-management-entreprise';

@Component({
  selector: 'f2ml-access-management-enterprise-laptop',
  templateUrl: './access-management-enterprise-laptop.component.html',
  styleUrls: ['./access-management-enterprise-laptop.component.scss']
})
export class AccessManagementEnterpriseLaptopComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<AccessManagementEnterprise>;
  @Output() sortChange = new EventEmitter<MatSort>();
  private sub!: Subscription;

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
