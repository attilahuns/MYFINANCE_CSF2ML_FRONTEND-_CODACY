import { Injectable, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfimDialogComponent } from './mat-confim-dialog.component';
import { PopUp } from './popUp';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  @Output() data!: PopUp;
  constructor(private dialog: MatDialog) { }

  openConfirmDialog(popUp: PopUp) {
    this.data = popUp;
    return this.dialog.open(MatConfimDialogComponent, {
      width: 'auto',
      disableClose: true
    })
  }
}
