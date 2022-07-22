import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agreement } from '../agreement';

@Component({
  selector: 'f2ml-agreement-mobile',
  templateUrl: './agreement-mobile.component.html',
  styleUrls: ['./agreement-mobile.component.scss']
})
export class AgreementMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: Agreement[] = [];
  @Input() viewAgreementBtnLabel!: string;

  constructor() { }

  ngOnInit(): void { }

}
