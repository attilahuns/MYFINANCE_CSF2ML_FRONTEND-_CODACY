import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'f2ml-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  @Input() _searchFilter = '';
  get searchFilter(): string {
    return this._searchFilter;
  }
  set searchFilter(value: string) {
    this._searchFilter = value;
    this.searchValue.emit(value);
  }
  constructor() { }

  ngOnInit(): void { }

}
