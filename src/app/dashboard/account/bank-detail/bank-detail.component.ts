import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map, tap } from 'rxjs';
import { DeviceDetectorService } from 'src/app/core/services/device-detector/device-detector.service';
import { TitleService } from 'src/app/core/services/title-service/title.service';
import { BankDetail, BankDetailMetadata } from './bank-detail';
import * as BankDetailActions from './state/bank-detail.actions';
import { getBankDetails, getBankDetailsMetadata, State } from './state/bank-detail.reducer';

@Component({
  selector: 'f2ml-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss']
})
export class BankDetailComponent implements OnInit {

  columns: { label: string, value: string, isSecrect?: boolean}[] = [];
  originalData?: BankDetail;
  metadata!: BankDetailMetadata;
  bankDetails$ = combineLatest([this.store.select(getBankDetails), this.store.select(getBankDetailsMetadata)]).pipe(
    filter(([bankDetail, metadata]) => !!metadata.title),
    tap(([_, metadata]) => this.titleService.setTitle(metadata.title)),
    tap(([bankDetail, metadata]) => {
      this.metadata = metadata;
      this.columns = [
        {
          label: this.metadata.bankNameLabel,
          value: bankDetail.bankName,
          isSecrect: false
        },
        {
          label: this.metadata.bankAccountNumberLabel,
          value: bankDetail.bankAccountNumber,
          isSecrect: true
        },
        {
          label: this.metadata.bankDetailsLabel,
          value: bankDetail.bankAccountDetails,
          isSecrect: false
        },
      ]
    }),
    map(([bankDetail, metadata]) => !!metadata.title),
  )

  constructor(private store: Store<State>, private titleService: TitleService, public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.store.dispatch(BankDetailActions.loadBankDetail());
    this.store.dispatch(BankDetailActions.loadBankDetailMetadata());
  }

}
