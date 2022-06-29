import { Component, Input, OnInit } from '@angular/core';
import { Information, InformationData } from '../information';

@Component({
  selector: 'f2ml-information-tile',
  templateUrl: './information-tile.component.html',
  styleUrls: ['./information-tile.component.scss']
})
export class InformationTileComponent implements OnInit {
  @Input() information!: Information;

  private dataVisibility: {label: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  hash(value: string): string {
    return value.replace(/./gi, 'X');
  }
  isVisible(data: InformationData): boolean {
    return this.dataVisibility.some(el => el.label === data.label)
  }
  toggleVisibility(data: InformationData): void {
    if (this.isVisible(data)) {
      this.dataVisibility = this.dataVisibility.filter(el => el.label !== data.label);
      return;
    }
    this.dataVisibility.push({label: data.label});
  }
}
