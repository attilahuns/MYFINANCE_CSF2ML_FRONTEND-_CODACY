import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ContractDetail } from '../contractDetail';


@Component({
  selector: 'f2ml-contract-detail-table',
  templateUrl: './contract-detail-table.component.html',
  styleUrls: ['./contract-detail-table.component.scss']
})
export class ContractDetailTableComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<ContractDetail>;
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
