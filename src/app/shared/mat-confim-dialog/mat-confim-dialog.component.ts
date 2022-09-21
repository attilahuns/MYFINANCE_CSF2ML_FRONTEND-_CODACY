import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

@Component({
  selector: 'f2ml-mat-confim-dialog',
  templateUrl: './mat-confim-dialog.component.html',
  styleUrls: ['./mat-confim-dialog.component.scss']
})
export class MatConfimDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatConfimDialogComponent>, public dialogService: DialogService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
