import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document';

@Component({
  selector: 'f2ml-document-mobile',
  templateUrl: './document-mobile.component.html',
  styleUrls: ['./document-mobile.component.scss']
})
export class DocumentMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction, metadata?: any }[] = [];
  @Input() dataSource: Document[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
