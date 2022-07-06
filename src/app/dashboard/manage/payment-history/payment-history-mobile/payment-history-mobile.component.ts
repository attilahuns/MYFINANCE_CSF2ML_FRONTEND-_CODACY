import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'f2ml-payment-history-mobile',
  templateUrl: './payment-history-mobile.component.html',
  styleUrls: ['./payment-history-mobile.component.scss']
})
export class PaymentHistoryMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: Payment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
