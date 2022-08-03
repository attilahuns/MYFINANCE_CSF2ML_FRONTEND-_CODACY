import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BankDetail } from '../bank-detail';
import { BankDetailService } from '../bank-detail.service';
import * as BankDetailAction from './bank-detail.actions';

@Injectable({
  providedIn: 'root'
})
export class BankDetailEffect {

  private bankDetails: BankDetail = {
    bankName: "HSBC",
    bankAccountNumber: "1234 5678 9990 9990 9990 9990 9990 01 2",
    bankAccountDetails: "21 prescot stree E18AD London"
  }

  loadBankDetailItems$ = createEffect(() => {
    return this.actions.pipe(
      ofType(BankDetailAction.loadBankDetail),
      mergeMap(() => of(this.bankDetails).pipe(
        map(bankDetails => BankDetailAction.loadBankDetailSuccess({bankDetails})),
        catchError(error => {
          return of(BankDetailAction.loadBankDetailFailure({error}))
        })
      ))
    )
  });

  loadBankDetailMetadata$ = createEffect(() => {
    return this.actions.pipe(
      ofType(BankDetailAction.loadBankDetailMetadata),
      mergeMap(() => this.bankDetailService.getMetadata().pipe(
        map(metadata => BankDetailAction.loadBankDetailMetadataSuccess({metadata})),
        catchError(error => {
          return of(BankDetailAction.loadBankDetailMetadataFailure({error}))
        })
      ))
    )
  });

  constructor(private actions: Actions, private bankDetailService: BankDetailService) { }
}
