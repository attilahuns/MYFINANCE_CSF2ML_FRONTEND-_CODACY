import { Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AccessManagement } from '../access-management';
import { AccessManagementBaseComponent } from '../access-management-base.component';

@Component({
  selector: 'f2ml-access-management-laptop',
  templateUrl: './access-management-laptop.component.html',
  styleUrls: ['./access-management-laptop.component.scss']
})
export class AccessManagementLaptopComponent  extends AccessManagementBaseComponent {

  @ViewChildren(MatInput) override matInputs!: QueryList<MatInput>;

  @ViewChild(MatSort) sort!: MatSort;
  @Input() columns: { name: string, header: string, sortable: boolean, value: CallableFunction }[] = [];
  displayedColumns: string[] = [];
  @Input() dataSource!: MatTableDataSource<AccessManagement>;
  @Output() sortChange = new EventEmitter<MatSort>();

  private sub!: Subscription;

  override ngOnInit(): void {
    this.displayedColumns = this.columns.map(column => column.name);
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.sub = this.sort.sortChange.subscribe(value => {
      this.sortChange.emit(this.sort);
    });
  }

  override ngOnDestroy(): void {
    this.sub.unsubscribe();
    super.ngOnDestroy();
  }

}
