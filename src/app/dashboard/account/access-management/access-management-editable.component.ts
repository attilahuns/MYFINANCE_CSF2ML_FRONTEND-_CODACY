import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { AccessManagement } from './access-management';

@Component({
  template: '',
})
export class AccessManagementEditableComponent {

  private onEditSubject: BehaviorSubject<AccessManagement> = new BehaviorSubject<AccessManagement>(this.getNewAccessManagement());
  onEdit$ = this.onEditSubject.asObservable();

  private onCancelEditSubject: BehaviorSubject<AccessManagement|null> = new BehaviorSubject<AccessManagement|null>(null);
  onCancelEdit$ = this.onCancelEditSubject.asObservable();

  dataSource = new MatTableDataSource<AccessManagement>();

  addRow() {
    let access = this.getNewAccessManagement();
    this.dataSource.data = [access, ...this.dataSource.data];
    this.editRow(access);
  }
  editRow(access: AccessManagement): void {
    this.onEditSubject.next(access);
  }
  deleteRow(access: AccessManagement): void {
    this.dataSource.data = this.dataSource.data.filter(row => row.id !== access.id);
  }
  saveRow(access: AccessManagement): void {
    this.onEditSubject.next(this.getNewAccessManagement());
  }
  cancelRow(access: AccessManagement): void {
    this.onCancelEditSubject.next(access);
  }
  cancelAppliedRow(access: AccessManagement): void {
    this.onEditSubject.next(this.getNewAccessManagement());
    this.onCancelEditSubject.next(null);
  }

  getNewAccessManagement(): AccessManagement {
    const id = -new Date().getTime();
    return { id : id, name: '', firstName: '', role: '', phone: '', email: '' }
  }

}
