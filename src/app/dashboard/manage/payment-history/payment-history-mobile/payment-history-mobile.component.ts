import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payment, PaymentMetadata } from '../payment';

@Component({
  selector: 'f2ml-payment-history-mobile',
  templateUrl: './payment-history-mobile.component.html',
  styleUrls: ['./payment-history-mobile.component.scss']
})
export class PaymentHistoryMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: Payment[] = [];
  @Input() metadata!: PaymentMetadata;

  constructor() { }

  ngOnInit(): void {
  }

  getIconUrl(icon: string) {
    return environment.cms.endpoint + icon;
  }

}
