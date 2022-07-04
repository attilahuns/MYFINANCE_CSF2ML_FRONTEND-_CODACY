import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'f2ml-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss']
})
export class ViewMoreComponent implements OnInit {

  @Output() viewMore = new EventEmitter<boolean>();
  @Input() viewLessMessage = 'View less';
  @Input() viewMoreMessage = 'View more';
  @Input() displayFullData = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayData(): void {
    this.displayFullData = !this.displayFullData;
    this.viewMore.emit(this.displayFullData);
  }
}
