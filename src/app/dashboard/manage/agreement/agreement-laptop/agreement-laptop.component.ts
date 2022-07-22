import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Agreement } from '../agreement';

@Component({
  selector: 'f2ml-agreement-laptop',
  templateUrl: './agreement-laptop.component.html',
  styleUrls: ['./agreement-laptop.component.scss']
})
export class AgreementLaptopComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<Agreement>;
  @Input() viewAgreementBtnLabel!: string;
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
