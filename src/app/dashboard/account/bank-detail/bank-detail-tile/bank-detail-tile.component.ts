import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'f2ml-bank-detail-tile',
  templateUrl: './bank-detail-tile.component.html',
  styleUrls: ['./bank-detail-tile.component.scss']
})
export class BankDetailTileComponent implements OnInit {

  @Input() columns: { label: string, value: string, isSecrect?: boolean}[] = [];
  private dataVisibility: {label: string}[] = [];

  constructor() { }

  ngOnInit(): void { }

  hash(value: string): string {
    return value.replace(/./gi, 'X');
  }
  isVisible(data: string): boolean {
    return this.dataVisibility.some(el => el.label === data)
  }
  toggleVisibility(data: string): void {
    if (this.isVisible(data)) {
      this.dataVisibility = this.dataVisibility.filter(el => el.label !== data);
      return;
    }
    this.dataVisibility.push({label: data});
  }

}
