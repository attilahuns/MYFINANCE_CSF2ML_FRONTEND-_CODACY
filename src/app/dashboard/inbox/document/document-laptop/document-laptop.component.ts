import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Document } from '../document';

@Component({
  selector: 'f2ml-document-laptop',
  templateUrl: './document-laptop.component.html',
  styleUrls: ['./document-laptop.component.scss']
})
export class DocumentLaptopComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction, metadata?: any }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<Document>;
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
