import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { filter, Observable, Subscription } from 'rxjs';
import { DialogService } from 'src/app/shared/mat-confim-dialog/dialog.service';
import { AccessManagement, AccessManagementMetadata, PopUp } from './access-management';

@Component({
  template: '',
})
export class AccessManagementBaseComponent implements OnInit, OnDestroy {

  @ViewChildren(MatInput) matInputs!: QueryList<MatInput>;

  @Input() onEdit$!: Observable<AccessManagement>;
  @Input() onCancelEdit$!: Observable<AccessManagement|null>;

  @Output() editAccessManagement: EventEmitter<AccessManagement> = new EventEmitter<AccessManagement>();
  @Output() deleteAccessManagement: EventEmitter<AccessManagement> = new EventEmitter<AccessManagement>();
  @Output() saveAccessManagement: EventEmitter<AccessManagement> = new EventEmitter<AccessManagement>();
  @Output() cancelAccessManagement: EventEmitter<AccessManagement> = new EventEmitter<AccessManagement>();
  @Output() cancelAppliedAccessManagement: EventEmitter<AccessManagement> = new EventEmitter<AccessManagement>();

  private onCancelEditSubscription!: Subscription;
  private onDeleteSubscription!: Subscription;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.onCancelEditSubscription = this.onCancelEdit$.pipe(
      filter(access => null !== access),
    ).subscribe(
      (access) => {
        if (null === access) {
          return
        }
        this.matInputs.forEach(input => {
          if (true === input.disabled) {
            return;
          }
          input.value = this.getAccessInputValue(input.name, access);
        });
        this.cancelAppliedAccessManagement.emit(access);
      }
    )
  }

  ngOnDestroy(): void {
    this.onCancelEditSubscription.unsubscribe();
    this.onDeleteSubscription.unsubscribe();
  }

  editRow(access: AccessManagement): void {
    this.editAccessManagement.emit(access);
  }
  deleteRow(access: AccessManagement, popUp: PopUp): void {
     this.onDeleteSubscription = this.dialogService.openConfirmDialog(popUp).afterClosed().subscribe(resp => {
      if (resp) {
        this.deleteAccessManagement.emit(access);
      }
    });
  }
  isOnEdit(onEditAccess: AccessManagement, currentAccess: AccessManagement): boolean {
    return onEditAccess.id === currentAccess.id
  }
  saveRow(access: AccessManagement): void {
    this.saveAccessManagement.emit(access);
  }
  cancelRow(access: AccessManagement): void {
    this.cancelAccessManagement.emit(access);
  }

  getAccessInputValue(name: string, access: AccessManagement): string | number {
    type ObjectKey = keyof typeof access;
    const column = name as ObjectKey;
    return access[column];
  }

}
